import ReactTimeAgo from "react-time-ago";
import Avatar from "../Avatar/";
import Link from "next/link.js";
import PostButtons from "../PostButtons";
import Image from "next/image";

export type Author = {
  _id: string;
  name?: string;
  email?: string;
  image?: string;
  emailVerified?: string | null;
  username?: string;
};

export type PostContentProps = {
  text?: string;
  author?: Author;
  parent?: Author;
  images?: string[];
  createdAt?: number | Date;
  _id: string | null | undefined;
  big?: boolean;
  likesCount?: number;
  commentsCount?: number;
  likedByMe?: boolean;
};

const PostContent = ({
  text,
  author,
  createdAt,
  _id,
  big = false,
  likesCount,
  commentsCount,
  likedByMe = false,
  images
}: PostContentProps) => {
  const createdAtNumeric =
    typeof createdAt === "number" ? createdAt : new Date(createdAt!).getTime();

  function isVideoFile(filename: string) {
    const videoExtensions = ["mp4", "mov", "avi", "mkv"];
    const extension = filename.split(".").pop()?.toLowerCase();
    return extension && videoExtensions.includes(extension);
  }

  function showImages() {
    if (!images?.length) {
      return "";
    }

    return (
      <div>
        {images.length > 0 &&
          images.map((img: any) => (
            <div
              key={img}
              className="flex items-center justify-center w-full h-full"
            >
              {isVideoFile(img) ? (
                <video
                  src={img}
                  className="object-cover h-full w-full border border-2 border-black py-1 rounded-2xl"
                  controls
                  controlsList="nodownload"
                  autoPlay
                />
              ) : (
                <Image
                  src={img}
                  alt=""
                  className="object-cover h-full w-full border border-2 border-black py-1 rounded-2xl"
                  objectFit="cover"
                  objectPosition="center"
                  width={1000}
                  height={1000}
                />
              )}
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      {author && (
        <div className="flex w-full">
          <div>
            {!!author?.image && (
              <div className="rounded-full overflow-hidden max-h-12">
                <Link href={`/${author.username}`}>
                  <Avatar src={author.image} />
                </Link>
              </div>
            )}
          </div>
          <div className="grow">
            <div className="pl-2">
              <Link href={`/${author!.username}`}>
                <span className="font-bold pr-1 text-twitterWhite">
                  {author?.name}
                </span>
              </Link>
              {big && <br />}
              <Link href={`/${author!.username}`}>
                <span className="text-twitterLightGray">
                  @{author?.username}
                </span>
              </Link>
              {createdAt && !big && (
                <span className="pl-1 text-twitterLightGray">
                  {"· "}
                  <ReactTimeAgo date={createdAtNumeric} timeStyle="twitter" />
                </span>
              )}
            </div>
            <div className="flex">
              {!big && (
                <div className="w-full">
                  {author && (
                    <>
                      <Link href={`/${author?.username}/status/${_id}`}>
                        <div className="md:w-full cursor-pointer">
                          <div className="flex flex-col">
                            <div className="px-2 whitespace-normal text-white">
                              {text}
                            </div>
                            <div className="rounded-b-2xl px-2 pt-1">
                              {showImages()}
                            </div>
                          </div>
                        </div>
                      </Link>
                      <PostButtons
                        username={author?.username}
                        id={_id}
                        likesCountDefault={likesCount!}
                        commentsCountDefault={commentsCount!}
                        likedByMeDefault={likedByMe}
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full">
        {big && (
          <div className="mt-2 w-full">
            {author && (
              <Link href={`/${author?.username}/status/${_id}`}>
                <div className="w-full">
                  <div className="whitespace-normal text-white">{text}</div>
                  <div className="rounded-b-2xl pt-1">{showImages()}</div>
                </div>
              </Link>
            )}
            {createdAt && (
              <div className="text-twitterLightGray text-base py-2 border-b border-twitterBorder">
                {new Date(createdAt)
                  .toISOString()
                  .replace("T", " ")
                  .slice(0, 16)
                  .split(" ")
                  .reverse()
                  .join(" ")}
              </div>
            )}
            <div className="flex items-center justify-center py-2 border-b border-twitterBorder">
              {author && (
                <PostButtons
                  username={author?.username}
                  id={_id}
                  likesCountDefault={likesCount!}
                  commentsCountDefault={commentsCount!}
                  likedByMeDefault={likedByMe}
                  size="large"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostContent;
