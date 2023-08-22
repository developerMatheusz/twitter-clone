import useUserInfo from "../../hooks/use-userInfo";
import { api } from "../../lib/axios";
import { useState } from "react";
import Avatar from "../Avatar";
import Upload from "../Upload";
import chalk from "chalk";
import Form from "../Form";
import FormButtons from "../FormButtons";

type PostFormProps = {
  onPost: () => void;
  placeholder?: string;
  parent?: any;
};

const PostForm = ({
  onPost,
  parent,
  placeholder = "O que está acontecendo?"
}: PostFormProps) => {
  const { userInfo, status } = useUserInfo();
  const [text, setText] = useState("");
  const [images, setImages] = useState<any>([]);

  async function handlePostSubmit(e: any) {
    e.preventDefault();

    await api
      .post("/posts", {
        text,
        parent,
        images
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });

    setText("");
    setImages([]);

    if (onPost) {
      onPost();
    }
  }

  if (status === "loading") {
    return "";
  }

  return (
    <form className="mx-5" onSubmit={handlePostSubmit}>
      <div className="flex">
        <div className="rounded-full overflow-hidden max-h-12">
          <Avatar src={userInfo?.image!} />
        </div>
        <div className="grow pl-2">
          <Upload
            onUploadFinish={(src) => setImages((prev: any) => [...prev, src])}
          >
            {({ isUploading }) => (
              <div>
                <Form
                  text={text}
                  setText={setText}
                  images={images}
                  placeholder={placeholder}
                  isUploading={isUploading}
                />
              </div>
            )}
          </Upload>
          <div className="pl-2">
            <FormButtons setText={setText} setImages={setImages} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
