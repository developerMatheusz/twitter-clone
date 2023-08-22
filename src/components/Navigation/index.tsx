import { ProfileInfoProps } from "../ProfileInfo";
import Button from "../Button";
import TwitterIcon from "../../utils/icon-component/TwitterIcon";
import ItemsNavbar from "../ItemsNavbar";

const Navigation = ({ profileInfo }: ProfileInfoProps) => {
  return (
    <nav className="md:w-56 text-white">
      <ItemsNavbar profileInfo={profileInfo} />
      <div className="flex items-center justify-center rounded-full">
        <Button type="normal" largeHeight>
          <TwitterIcon />
          <span className="hidden md:block text-xl">Twittar</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
