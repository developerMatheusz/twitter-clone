import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data/sets/14/twitter.json";
import ReactGiphySearchbox from "react-giphy-searchbox";
import Button from "../Button";
import ImageIcon from "../../utils/icon-component/ImageIcon";
import Input from "../Input";
import { useRef, useState } from "react";
import GifIcon from "../../utils/icon-component/GifIcon";
import EmojiIcon from "../../utils/icon-component/EmojiIcon";

type EmojiData = {
  id: string;
  native: string;
  colons: string;
  name: string;
  unified: string;
  skin: number;
  imageUrl: string;
};

type GifData = {
  images: {
    original: {
      url: string;
    };
  };
};

type FormButtonsProps = {
  setText: React.Dispatch<React.SetStateAction<string>>;
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};

const FormButtons = ({ setText, setImages }: FormButtonsProps) => {
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEmojiSelect = (emoji: EmojiData) => {
    setText((prevText: string) => prevText + emoji.native);
  };

  const handleGifSelect = (gif: GifData) => {
    setImages((prevImages: string[]) => [
      ...prevImages,
      gif.images.original.url
    ]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImages((prevImages) => [...prevImages, result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex relative justify-between text-right pt-2 pb-2">
      <div className="flex items-center">
        <div>
          <Button type="icon" onClick={openFileInput}>
            <ImageIcon />
          </Button>
          <Input
            type="file"
            onChange={handleFileChange}
            fileInputRef={fileInputRef}
            hidden
          />
        </div>
        <div>
          <Button type="icon" onClick={() => setShowGifPicker(!showGifPicker)}>
            <GifIcon />
          </Button>
        </div>
        <div>
          <Button
            type="icon"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <EmojiIcon />
          </Button>
        </div>
      </div>
      <div>
        <Button type="normal" typeButton="submit" label="Twittar" />
      </div>
      {showEmojiPicker && (
        <div className="absolute mt-10 border border-twitterBorder rounded-xl">
          <Picker
            data={data}
            set="twitter"
            onEmojiSelect={handleEmojiSelect}
            autoFocus
            locale="pt"
            navPosition="top"
            theme="dark"
            previewEmoji="point_up"
            skinTonePosition="preview"
            searchPosition="sticky"
          />
        </div>
      )}
      {showGifPicker && (
        <div className="absolute mt-10">
          <ReactGiphySearchbox
            apiKey="buOjDNLAwJ7K8HOlKsWTNwYlnyHt8WWY"
            onSelect={handleGifSelect}
            masonryConfig={[
              { columns: 3, imageWidth: 150, gutter: 5 },
              { mq: "700px", columns: 3, imageWidth: 150, gutter: 5 }
            ]}
            autoFocus
            searchPlaceholder="Pesquisar GIFs"
            searchFormClassName="text-base focus:outline-none text-twitterBorder rounded-full border-2 border-twitterBlue overflow-hidden"
            wrapperClassName="bg-black border border-twitterBorder p-4 rounded-xl"
            listWrapperClassName="rounded-xl overflow-hidden"
            poweredByGiphy={false}
            gifListHeight="400px"
            messageError="Oops! Um erro ocorreu. Por favor, tente novamente."
          />
        </div>
      )}
    </div>
  );
};

export default FormButtons;
