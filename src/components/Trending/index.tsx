type TrendingProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Trending = ({ title, subtitle, description }: TrendingProps) => {
  return (
    <div className="hover:bg-twitterGray">
      <span className="px-4 ml-2 mt-3 text-xs text-twitterLightGray">
        {title}
      </span>
      <h1 className="px-4 ml-2 font-bold text-white">{subtitle}</h1>
      <p
        className="px-4 ml-2 mb-3 text-xs text-twitterLightGray"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default Trending;
