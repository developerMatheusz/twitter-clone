import { PulseLoader } from "react-spinners";
import Input from "../Input";
import Image from "next/image";

type FormProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  images: string[];
  placeholder?: string;
  isUploading: boolean;
};

const Form = ({
  text,
  setText,
  images,
  placeholder,
  isUploading
}: FormProps) => {
  return (
    <div>
      <Input
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder={placeholder}
        typeInput="textarea"
        post={true}
      />
      <div className="flex -mx-2">
        {images.length > 0 &&
          images.map((img: any) => (
            <div className="max-h-24 my-2 mx-1" key={img}>
              <Image
                src={img}
                alt=""
                className="h-24 w-24 max-w-2xs object-cover rounded-xl border border-2 border-black"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        {isUploading && (
          <div className="h-24 w-24 m-2 bg-twitterBorder flex items-center justify-center">
            <PulseLoader size={14} color="#fff" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
