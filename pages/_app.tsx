import "../styles/globals.css";
import DefaultLayout from "../components/layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isBlog =
    router.pathname.startsWith("/blog") ||
    router.pathname.startsWith("/writing");

  if (isBlog) {
    return <Component {...pageProps} />;
  }

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
