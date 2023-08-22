import { initMongoose } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import Follower from "@/models/Follower";
import chalk from "chalk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await initMongoose();

    const session = await getServerSession(req, res, authOptions);

    const { destination } = req.body;

    const existingFollow = await Follower.findOne({
      destination,
      source: session?.user.id
    });

    if (existingFollow) {
      await existingFollow.deleteOne();
      res.json(null);
    } else {
      const f = await Follower.create({
        destination,
        source: session?.user.id
      });

      res.json(f);
    }
  } catch (error) {
    console.log(
      chalk.red.bold(
        `Não foi possível estabelecer conexão com MongoDB Atlas\n${error}\n`
      )
    );
  }
}
