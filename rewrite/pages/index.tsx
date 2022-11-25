import React, { FC } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Projects from "../components/projects";

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>Aditya Rathod | Home</title>
      </Head>
      {/* <Meta
        title="Aditya Rathod"
        description="Aditya is a computer science junior at The University of Texas at Dallas."
        domain={siteUrl}
        image={`${siteUrl}/og-image.png`}
        url={siteUrl}
      /> */}
      <Hero />
      <section className="pt-16 max-w-4xl" id="projects">
        <Projects />
      </section>
    </main>
  );
}
