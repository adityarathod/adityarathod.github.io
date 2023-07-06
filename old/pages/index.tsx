import React from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Projects from "../components/projects";
import { NextSeo } from "next-seo";
import projects from "../data/projects";

export default function IndexPage() {
  return (
    <main>
      <Head>
        <title>Aditya Rathod</title>
      </Head>
      <Hero />
      {/* <section className="pt-16 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">
        <div className="col-span-2 overflow-hidden rounded-[32px] bg-gray-700 grid grid-cols-3">
          <div className="bg-[#FDF2D8] h-full col-span-1 p-8 flex items-center justify-center">
            <img src="/voidling-icon.png" />
          </div>
          <div className="bg-red-30a0 h-full col-span-2 p-8">
            <h1 className="text-xl font-bold mb-2">Voidling</h1>
            <p>
              A Discord-based chatbot that uses information retrieval techniques
              (TF-IDF + SVD) and machine learning (DistilBERT + FLAN-T5) to
              answer questions about League of Legends lore.
            </p>
          </div>
        </div>

        <div className="col-span-1 p-8 rounded-[32px] bg-gray-600 aspect-square">
          hi
        </div>
        <div className="col-span-1 p-8 rounded-md bg-gray-600 aspect-square">
          hi
        </div>
        <div className="col-span-1 p-8 rounded-md bg-gray-600 aspect-square">
          hi
        </div>
      </section> */}
      {/* <section className="pt-16 max-w-4xl" id="projects">
        <Projects />
      </section> */}
    </main>
  );
}
