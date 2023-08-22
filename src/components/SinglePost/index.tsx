import useUserInfo from "../../hooks/use-userInfo";
import Layout from "../Layout";
import PostContent, { PostContentProps } from "../PostContent";
import PostForm from "../PostForm";
import TopNavLink from "../TopNavLink";

type SinglePostProps = {
  post: PostContentProps;
  fetchData: () => void;
  replies?: PostContentProps[];
  repliesLikedByMe?: string[] | null | undefined;
  id: string | string[] | undefined;
};

const SinglePost = ({
  post,
  fetchData,
  replies,
  repliesLikedByMe,
  id
}: SinglePostProps) => {
  const { userInfo } = useUserInfo();

  return (
    <Layout>
      {!!post?._id && (
        <div className="p-5">
          <TopNavLink />
          {post.parent && (
            <div>
              <div className="border border-twitterBorder rounded-xl p-2">
                <PostContent {...post.parent} />
              </div>
              <div className="relative h-8">
                <div className="border-l-2 border-twitterBorder h-10 absolute ml-6" />
              </div>
            </div>
          )}
          <div>
            <PostContent {...post} big />
          </div>
        </div>
      )}
      {!!userInfo && (
        <div>
          <PostForm
            onPost={fetchData}
            parent={id}
            placeholder="Tweet sua resposta!"
          />
        </div>
      )}
      <div className="mt-2">
        {replies!.length > 0 &&
          replies!.map((reply) => (
            <div key={reply._id} className="p-5 border-t border-twitterBorder">
              <PostContent
                {...reply}
                likedByMe={repliesLikedByMe?.includes(reply!._id!)}
              />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default SinglePost;
