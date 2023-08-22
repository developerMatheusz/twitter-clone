import { initMongoose } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
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

    if (req.method !== "PUT") {
      return res.json({ message: "Método não permitido!" });
    }

    const session = await getServerSession(req, res, authOptions);
    const { bio, name, username } = req.body;

    await User.findByIdAndUpdate(session?.user.id, { bio, name, username });

    res.json("Ok!");
  } catch (error) {
    console.log(
      chalk.red.bold(
        `Não foi possível estabelecer conexão com MongoDB Atlas\n${error}\n`
      )
    );
  }
}
