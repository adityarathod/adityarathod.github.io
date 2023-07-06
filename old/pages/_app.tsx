import "../styles/globals.css";
import DefaultLayout from "../components/layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Analytics from "../components/analytics";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isBlog =
    router.pathname.startsWith("/blog") ||
    router.pathname.startsWith("/writing");

  if (isBlog) {
    return (
      <>
        <Analytics />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <DefaultLayout>
      <Analytics />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
