import Link from "next/link";
import React from "react";
import { Github, LinkedIn } from "./icons";

export default function Hero() {
  return (
    <section className="my-5 md:my-10 text-lg md:text-xl texta-gray-300 leading-loose max-w-[715px]">
      <h1 className="text-3xl md:text-4xl text-white font-semibold mb-5 leading-[1.5]">
        👋 hi, i&apos;m aditya.
      </h1>
      <h2 className="leading-relaxed my-1">
        <p className="mb-3">
          I&apos;m a new grad software engineer from California that loves
          building data-driven solutions to problems. I speak DataFrames, SQL,
          Python, Hadoop, and so much more.
        </p>
        <p>See what I&apos;m building, </p>
      </h2>
      <h2 className="mt-6 flex flex-row">
        <Link
          className="mr-5 text-white opacity-70 hover:opacity-100 transition-opacity"
          href="https://github.com/adityarathod"
        >
          <Github className="fill-current w-7" />
        </Link>
        <Link
          className="mr-3 text-white opacity-70 hover:opacity-100 transition-opacity"
          href="https://linkedin.com/in/aditya-rathod"
        >
          <LinkedIn className="fill-current w-7" />
        </Link>
      </h2>
    </section>
  );
}
