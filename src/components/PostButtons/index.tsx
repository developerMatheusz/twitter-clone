import CommentIcon from "../../utils/icon-component/CommentIcon";
import LikeIcon from "../../utils/icon-component/LikeIcon";
import ConfigIcon from "../../utils/icon-component/ConfigIcon";
import UploadIcon from "../../utils/icon-component/UploadIcon";
import ReplaceIcon from "../../utils/icon-component/ReplaceIcon";
import Button from "../Button";
import { api } from "../../lib/axios";
import chalk from "chalk";
import Link from "next/link";
import { useState } from "react";
import FlipNumbers from "react-flip-numbers";

type PostButtonsProps = {
  username?: string;
  id: string | undefined | null;
  likesCountDefault: number;
  commentsCountDefault: number;
  likedByMeDefault: boolean;
  size?: "normal" | "large";
};

const PostButtons = ({
  likesCountDefault = 0,
  commentsCountDefault = 0,
  likedByMeDefault = false,
  id,
  username,
  size = "normal"
}: PostButtonsProps) => {
  const [likesCount, setLikesCount] = useState(likesCountDefault);
  const [likedByMe, setLikedByMe] = useState(likedByMeDefault);

  async function toogleLike() {
    await api
      .post("/like", {
        id
      })
      .then((response) => {
        if (response.data?.like) {
          setLikesCount((prev) => prev + 1);
          setLikedByMe(true);
        } else {
          setLikesCount((prev) => prev - 1);
          setLikedByMe(false);
        }
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }

  return (
    <div className="flex justify-self-start text-twitterLightGray text-sm pl-2 mt-1">
      <Link href={`/${username}/status/${id}`}>
        <div className="flex items-center hover:text-twitterBlue pr-12">
          <CommentIcon size={size} />
          {size === "normal" ? (
            <span>
              <FlipNumbers
                color=""
                height={12}
                width={12}
                play
                perspective={100}
                numbers={commentsCountDefault.toString()}
              />
            </span>
          ) : null}
        </div>
      </Link>
      <Button type="icon" largePr hoverGreen>
        <div className="flex items-center">
          <ReplaceIcon size={size} />
          {size === "normal" ? (
            <span>
              <FlipNumbers
                color=""
                height={12}
                width={12}
                play
                perspective={100}
                numbers="0"
              />
            </span>
          ) : null}
        </div>
      </Button>
      <Button
        type="icon"
        onClick={toogleLike}
        likedByMe={likedByMe}
        hoverRed
        largePr
      >
        <div className="flex items-center">
          <LikeIcon size={size} />
          {size === "normal" ? (
            <span>
              <FlipNumbers
                color=""
                height={12}
                width={12}
                play
                perspective={100}
                numbers={likesCount.toString()}
              />
            </span>
          ) : null}
        </div>
      </Button>
      <Button type="icon" largePr hoverBlue>
        <div className="flex items-center">
          <ConfigIcon size={size} />
          {size === "normal" ? (
            <span>
              <FlipNumbers
                color=""
                height={12}
                width={12}
                play
                perspective={100}
                numbers="0"
              />
            </span>
          ) : null}
        </div>
      </Button>
      <Button type="icon" hoverBlue largePr>
        <UploadIcon size={size} />
      </Button>
    </div>
  );
};

export default PostButtons;
