import LoginTemplate, { LoginTemplateProps } from "@/templates/Login";
import { getProviders } from "next-auth/react";

export default function Login(props: LoginTemplateProps) {
  return <LoginTemplate {...props} />;
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}
