import useUserInfo from "../../hooks/use-userInfo";
import Button from "../Button";
import Layout from "../Layout";
import PostContent, { PostContentProps } from "../PostContent";
import PostForm from "../PostForm";
import { signOut } from "next-auth/react";

type PostsProps = {
  fetchHomePosts: () => void;
  posts: PostContentProps[];
  idsLikedByMe: string[];
};

const Posts = ({ fetchHomePosts, posts, idsLikedByMe }: PostsProps) => {
  const { userInfo, setUserInfo } = useUserInfo();

  async function logout() {
    setUserInfo(null);
    await signOut();
  }

  return (
    <Layout>
      <h1 className="text-2xl text-white font-bold p-4 ml-2">Início</h1>
      <PostForm
        onPost={() => {
          fetchHomePosts();
        }}
      />
      <div>
        {posts.length > 0 &&
          posts.map((post: PostContentProps) =>
            !post.parent ? (
              <div key={post._id} className="border-t border-twitterBorder p-3">
                <PostContent
                  {...post}
                  likedByMe={idsLikedByMe!.includes(post._id!)}
                />
              </div>
            ) : null
          )}
      </div>
      {userInfo && (
        <div className="flex items-center justify-center p-5 text-center border-t border-twitterBorder">
          <div className="w-1/2">
            <Button type="normal" onClick={logout} bgWhite>
              Encerrar sessão
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Posts;
