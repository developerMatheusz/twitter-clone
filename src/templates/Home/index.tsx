import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { PostContentProps } from "@/components/PostContent";
import Posts from "@/components/Posts";
import UsernameForm from "@/components/UsernameForm";
import useUserInfo from "@/hooks/use-userInfo";
import { api } from "@/lib/axios";
import chalk from "chalk";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HomeTemplate = () => {
  const { userInfo, status: userInfoStatus } = useUserInfo();
  const [posts, setPosts] = useState([]);
  const [idsLikedByMe, setIdsLikedByMe] = useState<string[]>([]);
  const router = useRouter();

  function fetchHomePosts() {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data.posts);
        setIdsLikedByMe(response.data.idsLikedByMe);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }

  useEffect(() => {
    fetchHomePosts();
  }, []);

  if (userInfoStatus === "loading") {
    return (
      <>
        <NextSeo title="Carregando / Twitter Clone" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/twitter_logo_64.png" alt="Logo do Twitter" />
        </div>
      </>
    );
  }

  if (userInfo && !userInfo?.username) {
    return (
      <>
        <NextSeo title="Entrar no Twitter / Twitter Clone" />
        <UsernameForm />
      </>
    );
  }

  if (!userInfo) {
    router.push("/login");
    return "";
  }

  return (
    <div className="flex flex-none md:flex">
      <NextSeo title="Home / Twitter Clone" />
      <div className="flex md:w-2/5">
        <Navbar />
      </div>
      <div className="flex md:w-4/5">
        <Posts
          fetchHomePosts={fetchHomePosts}
          posts={posts}
          idsLikedByMe={idsLikedByMe}
        />
      </div>
      <div className="flex md:w-3/5 md:block hidden">
        <Menu />
      </div>
    </div>
  );
};

export default HomeTemplate;
