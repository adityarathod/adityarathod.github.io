import Link from "next/link";
import React from "react";
import { ExtLink, Github, LinkedIn } from "./icons";

export default function Hero() {
  return (
    <section className="my-5 md:my-20 text-lg md:text-xl text-gray-300 leading-loose max-w-[715px]">
      <h1 className="text-3xl md:text-4xl text-white font-semibold mb-10 leading-[1.5]">
        Computer science student interested in solving problems at scale with
        data.
      </h1>
      <h2 className="leading-relaxed my-1">
        I&apos;m a senior at{" "}
        <span className="font-semibold text-spring">
          The University of Texas at Dallas
        </span>{" "}
        with an eye for projects that involve processing large amounts of data.
        I speak DataFrames, SQL, Python, and so much more.
      </h2>
      <h2 className="leading-relaxed my-4">
        In my free time, I help{" "}
        <Link
          className="font-semibold text-blue-300"
          href="https://hackutd.co"
          target="_blank"
        >
          organize Texas&apos; largest hackathon{" "}
          <ExtLink className="inline fill-current w-5" />
        </Link>{" "}
        and{" "}
        <Link
          className="font-semibold text-blue-300"
          href="https://na.op.gg/summoners/na/Dichotomous"
          target="_blank"
        >
          feed the enemy team in League{" "}
          <ExtLink className="inline fill-current w-5" />
        </Link>
        .
      </h2>
      <h2 className="leading-relaxed my-4">
        Most recently interned @{" "}
        <span className="font-semibold text-spring">Amazon Web Services</span>{" "}
        in California.
      </h2>
      <h2 className="mt-8 flex flex-row">
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
