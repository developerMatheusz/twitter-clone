import Image from "next/image";

type LogoProps = {
  size?: "small" | "normal";
};

const Logo = ({ size = "small" }: LogoProps) => {
  return (
    <div
      className={`${
        size === "small" ? "w-7 h-7" : "w-12 h-12"
      } text-twitterLightGray`}
    >
      <Image
        src="/twitter_logo_512.png"
        alt="Logo do Twitter"
        objectFit="cover"
        objectPosition="center"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Logo;
