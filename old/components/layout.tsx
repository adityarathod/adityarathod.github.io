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
      {/* Line decoration */}
      <div className="w-full bg-cyan h-[3px]"></div>
      <DefaultSeo {...SEO} />
      {/* Layout container */}
      <div className="px-8 sm:px-8 md:px-10 lg:px-10 xl:px-10 max-w-6xl mx-auto">
        <Navbar />
        <Head>
          <title>Aditya Rathod</title>
        </Head>
        {/* Main page content */}
        <main className="py-10">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
