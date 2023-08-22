import { NextSeo } from "next-seo";
import Link from "next/link";

export default function NotFound404() {
  return (
    <>
      <NextSeo title="Twitter Clone | Erro 404" />
      <div className="flex items-center justify-center h-screen">
        <div>
          <span className="text-xl">Essa página não existe</span>
          <Link
            href="/"
            className="w-full mt-2 flex bg-twitterWhite pl-3 pr-5 px-5 py-2 text-black rounded-full items-center justify-center"
          >
            Retornar
          </Link>
        </div>
      </div>
    </>
  );
}
