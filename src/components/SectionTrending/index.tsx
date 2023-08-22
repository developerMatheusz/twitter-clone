import Link from "next/link";
import Trending from "../Trending";
import mock from "./mock";

const SectionTrending = () => {
  return (
    <div className="flex flex-col mt-4 border border-twitterDarkGray bg-twitterDarkGray rounded-3xl w-full">
      <div className="flex">
        <h2 className="px-4 py-4 text-xl w-full font-semibold text-white">
          O que está acontecendo
        </h2>
      </div>
      <div className="flex flex-col cursor-pointer">
        {mock.map((trending: any) => (
          <Trending
            key={trending.id}
            title={trending.title}
            subtitle={trending.subtitle}
            description={trending.description}
          />
        ))}
        <div className="text-twitterBlue hover:bg-twitterGray hover:rounded-b-3xl">
          <Link href="https://twitter.com/explore/tabs/for-you" target="_blank">
            <div className="ml-5 py-4">Mostrar mais</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTrending;
