import React, { FC } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Projects from "../components/projects";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>Aditya Rathod</title>
      </Head>
      <Hero />
      <section className="pt-16 max-w-4xl" id="projects">
        <Projects />
      </section>
    </main>
  );
}
