import { NextApiRequest, NextApiResponse } from "next";
import { S3 } from "aws-sdk";
import multiparty from "multiparty";
import fs from "fs";
import { initMongoose } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import User from "@/models/User";
import chalk from "chalk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await initMongoose();

    const session = await getServerSession(req, res, authOptions);

    const s3Client = new S3({
      region: "sa-east-1",
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY ?? "",
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? ""
      }
    });

    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
      if (err) throw err;

      const type = Object.keys(files)[0];
      const fileInfo = files[type][0];
      const filename = fileInfo.path.split("/").slice(-1)[0];

      s3Client.upload(
        {
          Bucket: "matheus-twitter-clone",
          Key: filename,
          Body: fs.readFileSync(fileInfo.path),
          ACL: "public-read",
          ContentType: fileInfo.headers["Content-Type"]
        },
        async (err: any, data: any) => {
          if (type === "cover" || type === "image") {
            await User.findByIdAndUpdate(session?.user.id, {
              [type]: data.Location
            });
          }

          fs.unlinkSync(fileInfo.path);
          res.json({ err, data, fileInfo, src: data.Location });
        }
      );
    });
  } catch (error) {
    console.log(
      chalk.red.bold(
        `Não foi possível estabelecer conexão com MongoDB Atlas\n${error}\n`
      )
    );
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};
