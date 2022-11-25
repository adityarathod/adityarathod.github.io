import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function NotFoundPage() {
  return (
    <section className="mt-24 text-ceanter">
      <div className="max-w-[500px] max-h-[500px] aspect-square relative mx-auto">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            src="/question-mark-ping.gif"
            alt="question mark ping"
            width={500}
            height={500}
            className="w-full aspect-square"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center p-2 bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-spring mb-8">404</h1>
            <h2 className="text-2xl md:text-3xl mb-3">
              This little server wasn&apos;t able to find what you&apos;re
              looking for.
            </h2>
            <h3 className="text-md md:text-lg text-gray-300">
              maybe try looking using those links above? or if you know this is
              a mistake,{" "}
              <Link
                href="https://github.com/adityarathod/adityarathod.github.io/issues"
                className="text-cyan"
              >
                file an issue!
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
