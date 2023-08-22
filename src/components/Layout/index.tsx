type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="border-l border-r border-twitterBorder min-h-screen w-full">
      {children}
    </div>
  );
};

export default Layout;
