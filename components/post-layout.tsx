import Head from "next/head";
import React from "react";
import Navbar from "./navbar";

interface PostLayoutProps {
  hideFooter?: boolean;
  children?: React.ReactNode;
}

export default function PostLayout(props: PostLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="py-10 px-8 max-w-6xl">
        <Head>
          <title>Aditya Rathod</title>
        </Head>
        <article>{props.children}</article>
      </div>
    </>
  );
}
