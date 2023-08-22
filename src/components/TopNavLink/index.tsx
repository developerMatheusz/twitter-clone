import Link from "next/link";

type TopNavLinkProps = {
  title?: string | string[];
  url?: string;
};

const TopNavLink = ({ title = "Tweet", url = "/" }: TopNavLinkProps) => {
  return (
    <Link href={url}>
      <div className="flex items-center mb-2 text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <h1 className="text-2xl font-bold py-4">{title}</h1>
      </div>
    </Link>
  );
};

export default TopNavLink;
