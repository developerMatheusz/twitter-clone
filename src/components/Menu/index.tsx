import { api } from "../../lib/axios";
import chalk from "chalk";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchIcon from "../../utils/icon-component/SearchIcon";
import Input from "../Input";
import SectionTrending from "../SectionTrending";
import SectionFollow from "../SectionFollow";

const Menu = () => {
  const router = useRouter();
  const [profileInfo, setProfileInfo] = useState<any>();
  const { data: session } = useSession();

  useEffect(() => {
    api
      .get(`/users`)
      .then((response) => {
        setProfileInfo(
          response.data.user.filter(
            (user: any) => user._id !== session?.user.id
          )
        );
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
        router.push("/");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto px-2 mt-1">
      <div className="flex relative items-center text-white border border-twitterDarkGray bg-twitterDarkGray rounded-full cursor-pointer w-full py-1">
        <SearchIcon />
        <div className="ml-1 px-10 w-full">
          <Input
            type="search"
            typeInput="input"
            placeholder="Pesquisar no Twitter"
            bgTransparent
          />
        </div>
      </div>
      <SectionTrending />
      <SectionFollow profileInfo={profileInfo} />
    </div>
  );
};

export default Menu;
