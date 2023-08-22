import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { PostContentProps } from "@/components/PostContent";
import SinglePost from "@/components/SinglePost";
import { api } from "@/lib/axios";
import chalk from "chalk";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostPageTemplate = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<PostContentProps>();
  const [replies, setReplies] = useState<PostContentProps[]>([]);
  const [repliesLikedByMe, setRepliesLikedByMe] = useState<
    string[] | null | undefined
  >([]);

  function fetchData() {
    api
      .get(`/posts?id=${id}`)
      .then((response) => {
        setPost(response.data.post);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });

    api
      .get(`/posts?parent=${id}`)
      .then((response) => {
        setReplies(response.data.posts);
        setRepliesLikedByMe(response.data.idsLikedByMe);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }

  function sliceString(str: string) {
    if (str) {
      const words = str.split(" ");
      if (words.length <= 16) {
        return words.join(" ");
      } else {
        return words.slice(0, 25).join(" ");
      }
    }

    return '"Post sem texto"';
  }

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-none md:flex">
      <NextSeo
        title={`${post?.author?.username} on Twitter: ${sliceString(
          post?.text!
        )}`}
      />
      <div className="flex md:w-2/5">
        <Navbar />
      </div>
      <div className="flex w-full md:w-4/5">
        <SinglePost
          post={post!}
          fetchData={fetchData}
          replies={replies}
          repliesLikedByMe={repliesLikedByMe}
          id={id}
        />
      </div>
      <div className="flex md:w-3/5 md:block hidden">
        <Menu />
      </div>
    </div>
  );
};

export default PostPageTemplate;
