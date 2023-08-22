import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { PostContentProps } from "@/components/PostContent";
import PostsProfile from "@/components/PostsProfile";
import useUserInfo from "@/hooks/use-userInfo";
import { api } from "@/lib/axios";
import chalk from "chalk";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

const UserPageTemplate = () => {
  const router = useRouter();
  const { username } = router.query;
  const [profileInfo, setProfileInfo] = useState<any>();
  const [originalUserInfo, setOriginalUserInfo] = useState<any>();
  const { userInfo } = useUserInfo();
  const [posts, setPosts] = useState<PostContentProps[]>([]);
  const [postsLikedByMe, setPostsLikedByMe] = useState<
    string[] | null | undefined
  >([]);
  const [editMode, setEditMode] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!username) {
      return;
    }

    api
      .get(`/users?username=${username}`)
      .then((response) => {
        setProfileInfo(response.data.user);
        setOriginalUserInfo(response.data.user);
        setIsFollowing(!!response.data.follow);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
        router.push("/");
      });
  }, [username]);

  useEffect(() => {
    if (!profileInfo?._id) {
      return;
    }

    api
      .get(`/posts?author=${profileInfo._id}`)
      .then((response) => {
        setPosts(response.data.posts);
        setPostsLikedByMe(response.data.idsLikedByMe);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }, [profileInfo]);

  function updateUserImage(type: string, src: ChangeEvent<HTMLInputElement>) {
    setProfileInfo((prev: any) => ({ ...prev, [type]: src }));
  }

  async function updateProfile() {
    const { bio, name, username } = profileInfo;
    await api
      .put("/profile", {
        bio,
        name,
        username
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
    setEditMode(false);
  }

  function cancel() {
    setProfileInfo((prev: any) => {
      const { bio, name, username } = originalUserInfo;
      return { ...prev, bio, name, username };
    });
    setEditMode(false);
  }

  function toogleFollow() {
    setIsFollowing((prev) => !prev);
    api
      .post("/followers", {
        destination: profileInfo?._id
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }

  const isMyProfile = profileInfo?._id === userInfo?._id;

  return (
    <div className="flex flex-none md:flex">
      <NextSeo
        title={`${profileInfo?.name} (@${profileInfo?.username}) / Twitter Clone`}
      />
      <div className="flex md:w-2/5">
        <Navbar />
      </div>
      <div className="flex w-full md:w-4/5">
        <PostsProfile
          profileInfo={profileInfo}
          isFollowing={isFollowing}
          isMyProfile={isMyProfile}
          updateUserImage={updateUserImage}
          toogleFollow={toogleFollow}
          editMode={editMode}
          cancel={cancel}
          posts={posts}
          setEditMode={setEditMode}
          updateProfile={updateProfile}
          setProfileInfo={setProfileInfo}
          postsLikedByMe={postsLikedByMe}
        />
      </div>
      <div className="flex md:w-3/5 md:block hidden">
        <Menu />
      </div>
    </div>
  );
};

export default UserPageTemplate;
