import { signIn } from "next-auth/react";
import Link from "next/link";
import Logo from "../Logo";
import Button from "../Button";
import Divider from "../Divider";

type ProvidersFormProps = {
  providers: [
    {
      id: string;
    }
  ];
};

const ProvidersForm = ({ providers }: ProvidersFormProps) => {
  return (
    <div className="flex flex-col items-start justify-self-start md:w-full">
      <div>
        <div className="mb-20 mt-10 w-10">
          <Logo size="normal" />
        </div>
        <h1 className="text-5xl text-white md:text-7xl font-bold mb-10">
          Acontecendo agora
        </h1>
        <h2 className="text-2xl text-white md:text-4xl font-bold mb-5">
          Inscreva-se no Twitter hoje mesmo.
        </h2>
      </div>
      <div className="md:w-1/2 w-64">
        {Object.values(providers).map((provider) => (
          <div
            key={provider.id}
            className="flex items-center justify-center p-1"
          >
            <Button
              type="normal"
              bgWhite
              onClick={async () => {
                await signIn(provider.id);
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src="/google_icon.png"
                  alt="Logo do provedor"
                  className="h-6 mr-1"
                />
                Inscrever-se no Google
              </div>
            </Button>
          </div>
        ))}
        <Divider />
        <div className="flex flex-col gap-2 items-center justify-center p-1">
          <Button type="normal">Criar conta</Button>
          <div className="md:text-xs text-2xs text-twitterLightGray">
            <span>
              Ao se inscrever, você concorda com os{" "}
              <Link
                href="https://twitter.com/pt/tos"
                target="_blank"
                className="text-twitterBlue hover:underline"
              >
                Termos de Serviço
              </Link>{" "}
              e a{" "}
              <Link
                href="https://twitter.com/pt/privacy"
                target="_blank"
                className="text-twitterBlue hover:underline"
              >
                Política de Privacidade
              </Link>
              , incluindo o{" "}
              <Link
                href="https://help.twitter.com/pt/rules-and-policies/twitter-cookies"
                target="_blank"
                className="text-twitterBlue hover:underline"
              >
                Uso de Cookies
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersForm;
