import chalk from "chalk";
import { useState } from "react";
import { FileDrop } from "react-file-drop";

type UploadProps = {
  children: (value: any) => any;
  onUploadFinish: (src: string) => any;
};

const Upload = ({ children, onUploadFinish }: UploadProps) => {
  const [isFileNearby, setIsFileNearby] = useState(false);
  const [isFileOver, setIsFileOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  function uploadImage(files: any, e: any) {
    e.preventDefault();

    setIsFileOver(false);
    setIsUploading(true);

    const data = new FormData();
    data.append("post", files[0]);

    fetch("/api/upload", {
      method: "POST",
      body: data
    })
      .then(async (response) => {
        const json = await response.json();
        const src = json.src;
        onUploadFinish(src);
        setIsUploading(false);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
      });
  }

  return (
    <FileDrop
      onDrop={uploadImage}
      onDragOver={() => setIsFileOver(true)}
      onDragLeave={() => setIsFileOver(false)}
      onFrameDragEnter={() => setIsFileNearby(true)}
      onFrameDragLeave={() => setIsFileNearby(false)}
      onFrameDrop={() => {
        setIsFileNearby(false);
        setIsFileOver(false);
      }}
    >
      <div className="relative">
        {(isFileNearby || isFileOver) && (
          <div className="bg-twitterBlue absolute inset-0 flex items-center justify-center">
            Solte seus arquivos
          </div>
        )}
        {children({ isUploading })}
      </div>
    </FileDrop>
  );
};

export default Upload;
