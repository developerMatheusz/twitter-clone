import chalk from "chalk";
import Image from "next/image";
import { useState } from "react";
import { FileDrop } from "react-file-drop";
import { PulseLoader } from "react-spinners";

type EditableImageProps = {
  type?: string;
  src: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  editable?: boolean;
};

const EditableImage = ({
  type,
  src,
  onChange,
  className,
  editable = false
}: EditableImageProps) => {
  const [isFileNearby, setIsFileNearby] = useState(false);
  const [isFileOver, setIsFileOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  let extraClass = "";

  if (isFileNearby && !isFileOver) extraClass += " bg-blue-500 opacity-40";
  if (isFileOver) extraClass += " bg-blue-500 opacity-90";
  if (!editable) extraClass = "";

  function updateImage(files: any, e: any) {
    if (!editable) {
      return;
    }

    e.preventDefault();

    setIsFileOver(false);
    setIsUploading(true);

    const data = new FormData();
    data.append(type!, files[0]);

    fetch("/api/upload", {
      method: "POST",
      body: data
    })
      .then(async (response) => {
        const json = await response.json();
        onChange(json.src);
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
      onDrop={updateImage}
      onDragOver={() => setIsFileOver(true)}
      onDragLeave={() => setIsFileOver(false)}
      onFrameDragEnter={() => setIsFileNearby(true)}
      onFrameDragLeave={() => setIsFileNearby(false)}
      onFrameDrop={() => {
        setIsFileNearby(false);
        setIsFileOver(false);
      }}
    >
      <div className={`bg-twitterBorder text-white relative`}>
        <div className={`${extraClass} absolute inset-0`} />
        {isUploading && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(48, 140, 216, 0.9)" }}
          >
            <PulseLoader size={14} color="#fff" />
          </div>
        )}
        <div className={`${className} cover flex items-center overflow-hidden`}>
          {src && (
            <Image
              src={src}
              alt="Imagem de perfil"
              objectFit="cover"
              objectPosition="center"
              width={10000}
              height={10000}
            />
          )}
        </div>
      </div>
    </FileDrop>
  );
};

export default EditableImage;
