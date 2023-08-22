import { ChangeEventHandler } from "react";

type OnChangeType<T extends "input" | "textarea"> = T extends "input"
  ? ChangeEventHandler<HTMLInputElement>
  : ChangeEventHandler<HTMLTextAreaElement>;

type InputProps = {
  type?: string;
  value?: string;
  onChange?: OnChangeType<"input" | "textarea">;
  typeInput?: "input" | "textarea";
  placeholder?: string;
  compact?: boolean;
  post?: boolean;
  fileInputRef?: React.RefObject<HTMLInputElement>;
  hidden?: boolean;
  bgTransparent?: boolean;
};

const Input = ({
  type,
  value,
  onChange,
  typeInput = "input",
  placeholder = "",
  compact = false,
  post = false,
  fileInputRef,
  hidden = false,
  bgTransparent
}: InputProps) => {
  return (
    <div className="w-full">
      {typeInput === "input" ? (
        <input
          type={type}
          value={value}
          onChange={onChange as OnChangeType<"input">}
          className={`${
            hidden
              ? "hidden"
              : `${
                  bgTransparent ? "bg-transparent" : "bg-twitterBorder"
                } overflow-y-hidden p-2 text-white rounded-full focus:outline-none`
          } w-full`}
          placeholder={placeholder}
          ref={fileInputRef}
        />
      ) : (
        <textarea
          value={value}
          onChange={onChange as OnChangeType<"textarea">}
          className={`${
            compact ? "h-12 mt-1" : "h-14 border-b border-twitterBorder"
          } ${
            post
              ? "focus:h-16 outline-none ease-out duration-300 bg-transparent"
              : "bg-twitterBorder block focus:outline-none rounded-2xl"
          } overflow-y-hidden p-2 text-white resize-none w-full`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
