type ButtonProps = {
  onClick?: (val: any) => any;
  label?: string;
  type?: "icon" | "normal";
  typeButton?: "submit" | "button";
  children?: React.ReactNode;
  largeHeight?: boolean;
  largePr?: boolean;
  hoverGreen?: boolean;
  hoverBlue?: boolean;
  hoverRed?: boolean;
  likedByMe?: boolean;
  bgWhite?: boolean;
};

const Button = ({
  onClick,
  label,
  type = "normal",
  typeButton = "button",
  children,
  largeHeight = false,
  largePr = false,
  hoverGreen = false,
  hoverBlue = false,
  hoverRed,
  likedByMe = false,
  bgWhite = false
}: ButtonProps) => {
  return (
    <button
      type={typeButton}
      onClick={onClick}
      className={`${
        type === "normal"
          ? `${
              label === "Cancelar" || label === "Seguindo" || bgWhite
                ? "bg-white hover:bg-twitterWhite text-black"
                : "bg-twitterBlue hover:bg-twitterHoverBlue text-white"
            } transition ease-in-out ${
              largeHeight ? "md:py-4 p-2" : "py-2 px-5"
            } rounded-full w-full text-center`
          : `flex items-center ${largePr ? "pr-12" : "pr-4"} ${
              hoverGreen && "hover:text-green-600"
            } ${hoverBlue && "hover:text-twitterBlue"} ${
              hoverRed && "hover:text-pink-600"
            } ${likedByMe && "text-red-500 fill-red-500"}`
      }`}
    >
      {children ? <div>{children}</div> : <div>{label}</div>}
    </button>
  );
};

export default Button;
