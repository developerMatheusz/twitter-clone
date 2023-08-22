import Link from "next/link";
import Avatar from "../Avatar";
import { Profile } from "../ProfileInfo";
import Button from "../Button";

type SectionFollowProps = {
  profileInfo: Profile[];
};

const SectionFollow = ({ profileInfo }: SectionFollowProps) => {
  return (
    <div className="flex flex-col mt-4 border border-twitterDarkGray bg-twitterDarkGray rounded-3xl w-full">
      <div className="flex p-2">
        <div>
          <h2 className="px-4 text-xl w-48 font-semibold text-white">
            Quem seguir
          </h2>
        </div>
      </div>
      {!!profileInfo && (
        <div className="cursor-pointer">
          {profileInfo.map((infoUser) => (
            <div key={infoUser?._id}>
              <div className="flex flex-col justify-center w-full p-2 hover:bg-twitterGray">
                <Link href={infoUser?.username}>
                  <div className="flex">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center">
                        <div className="rounded-full overflow-hidden max-h-16">
                          <Avatar src={infoUser?.image} />
                        </div>
                        <div className="ml-2">
                          <h1 className="font-bold text-lg text-white leading-4 hover:underline">
                            {infoUser?.name}
                          </h1>
                          <h2 className="text-twitterLightGray text-base">
                            @{infoUser?.username}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-2 ml-3">
                      <Button type="normal">Ver perfil</Button>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-twitterBlue hover:bg-twitterGray hover:rounded-b-3xl">
                <Link href="/">
                  <div className="ml-5 py-4">Mostrar mais</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionFollow;
