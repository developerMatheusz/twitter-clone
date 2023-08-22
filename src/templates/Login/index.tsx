import Background from "@/components/Background";
import ProvidersForm from "@/components/ProvidersForm";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export type LoginTemplateProps = {
  providers: [
    {
      id: string;
    }
  ];
};

const LoginTemplate = ({ providers }: LoginTemplateProps) => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return "";
  }

  if (data) {
    router.push("/");
  }

  return (
    <>
      <NextSeo title="Twitter. É oque está acontecendo / Twitter Clone" />
      <div className="flex h-screen overflow-y-auto">
        <div className="md:w-1/2 flex hidden md:block overflow-y-auto">
          <Background />
        </div>
        <div className="flex items-center justify-center w-full h-full ml-5 md:w-1/2 overflow-y-auto">
          <ProvidersForm providers={providers} />
        </div>
      </div>
    </>
  );
};

export default LoginTemplate;
