import { api } from "../../lib/axios";
import chalk from "chalk";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import ProfileInfo, { Profile } from "../ProfileInfo";

const Navbar = () => {
  const router = useRouter();
  const [profileInfo, setProfileInfo] = useState<Profile>();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }

    api
      .get(`/users?id=${session?.user.id}`)
      .then((response) => {
        setProfileInfo(response.data.user);
      })
      .catch((error) => {
        console.log(
          chalk.red.bold(`A API não responde de forma correta\n${error}\n`)
        );
        router.push("/");
      });
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full">
        <div className="w-full h-full">
          <div className="flex md:w-full items-center justify-center p-2">
            <div className="grid md:w-56 md:mb-0 mb-4">
              <div className="md:justify-self-start justify-center flex md:ml-2">
                <Logo />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Navigation profileInfo={profileInfo} />
            <div className="flex mt-4 md:p-4 md:w-full pl-2 items-center justify-center">
              <ProfileInfo profileInfo={profileInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
