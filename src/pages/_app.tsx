import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import SEO from "../../next-seo.config";
import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";

TimeAgo.addLocale(en);

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
