import Head from "next/head";
import React, { FC } from "react";
import Navbar from "./navbar";
import { DefaultSeo } from "next-seo";
import SEO from "../utils/default-seo";

interface LayoutProps {
  hideFooter?: boolean;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Navbar />
      <DefaultSeo {...SEO} />
      <div className="py-10 px-8 sm:px-8 md:px-10 lg:px-10 xl:px-10 max-w-6xl mx-auto">
        <Head>
          <title>Aditya Rathod</title>
        </Head>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
