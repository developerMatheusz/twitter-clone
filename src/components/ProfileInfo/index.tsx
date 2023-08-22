import Link from "next/link";
import Avatar from "../Avatar";

export type Profile = {
  _id: string;
  name: string;
  email: string;
  image: string;
  emailVerified: boolean;
  username: string;
  bio: string;
  cover: string;
};

export type ProfileInfoProps = {
  profileInfo?: Profile;
};

const ProfileInfo = ({ profileInfo }: ProfileInfoProps) => {
  return (
    <Link
      href={`/${profileInfo?.username}`}
      className="flex-shrink-0 group block"
      key={profileInfo?._id}
    >
      {profileInfo && (
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden max-h-12">
            <Avatar src={profileInfo?.image!} />
          </div>
          <div className="ml-3">
            {profileInfo && (
              <div>
                <h1 className="font-bold text-base text-white leading-4 mb-1 hidden md:block">
                  {profileInfo?.name}
                </h1>
                <h2 className="text-twitterLightGray text-sm hidden md:block">
                  @{profileInfo?.username}
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </Link>
  );
};

export default ProfileInfo;
