import Image from "next/image";

const Background = () => {
  return (
    <div className="flex items-center justify-center relative w-full h-full">
      <Image
        src="/background.png"
        alt="Background do Twitter"
        className="w-full h-full absolute object-cover"
        objectFit="cover"
        objectPosition="center"
        width={1000}
        height={1000}
      />
      <Image
        src="/twitter_logo_512.png"
        alt="Logo do Twitter"
        className="w-1/2 h-1/2 absolute object-contain"
        objectFit="contain"
        objectPosition="center"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Background;
