import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { initMongoose } from "@/lib/mongoose";
import Follower from "@/models/Follower";
import chalk from "chalk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await initMongoose();

    const session = await getServerSession(req, res, authOptions);

    if (req.method === "PUT") {
      const { username } = req.body;

      await User.findByIdAndUpdate(session?.user.id, { username });

      res.json("Ok!");
    }

    if (req.method === "GET") {
      const { id, username } = req.query;
      let user;
      let follow;

      if (id) {
        user = await User.findById(id);
        follow = await Follower.findOne({
          source: session?.user.id,
          destination: user._id
        });
      } else if (username) {
        user = await User.findOne({ username });
        follow = await Follower.findOne({
          source: session?.user.id,
          destination: user._id
        });
      } else {
        user = await User.find();
        follow = await Follower.find();
      }

      res.json({ user, follow });
    }
  } catch (error) {
    console.log(
      chalk.red.bold(
        `Não foi possível estabelecer conexão com MongoDB Atlas\n${error}\n`
      )
    );
  }
}
