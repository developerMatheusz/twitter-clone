import { initMongoose } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import Like from "@/models/Like";
import Post from "@/models/Post";
import chalk from "chalk";

async function updateLikesCount(postId: any) {
  const post = await Post.findById(postId);
  post.likesCount = await Like.countDocuments({ post: postId });
  await post.save();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await initMongoose();

    const session = await getServerSession(req, res, authOptions);
    const postId = req.body.id;
    const userId = session?.user.id;
    const existingLike = await Like.findOne({ author: userId, post: postId });

    if (existingLike) {
      await existingLike.deleteOne();
      await updateLikesCount(postId);

      res.json(null);
    } else {
      const like = await Like.create({ author: userId, post: postId });
      await updateLikesCount(postId);

      res.json({ like });
    }
  } catch (error) {
    console.log(
      chalk.red.bold(
        `Não foi possível estabelecer conexão com MongoDB Atlas\n${error}\n`
      )
    );
  }
}
