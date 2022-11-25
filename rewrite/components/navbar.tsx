import Link from "next/link";
import React, { FC } from "react";
import { Github, LinkedIn } from "./icons";

interface NavLinkProps {
  href: string;
  text: string;
  external?: boolean;
  mobile?: boolean;
}

const NavLink: FC<NavLinkProps> = (props: NavLinkProps) => {
  const linkClasses = props.mobile
    ? "text-white text-md opacity-80 hover:opacity-100 transition-opacity mr-10"
    : "text-white text-md opacity-80 hover:opacity-100 transition-opacity ml-10";

  return props.external ? (
    <a href={props.href} className={linkClasses}>
      {props.text}
    </a>
  ) : (
    <Link href={props.href} className={linkClasses}>
      {props.text}
    </Link>
  );
};

export default function Navbar() {
  return (
    <section>
      <div className="w-full bg-cyan h-[3px]"></div>
      <header className="mt-3 px-8 py-3 mx-auto flex flex-row items-center justify-between sm:justify-between md:justify-start lg:justify-start xl:justify-start">
        <div className="mr-0 sm:mr-0 md:mr-8 lg:mr-10 xl:mr-10 text-center">
          <Link
            href="/"
            className="font-bold text-2xl text-white opacity-100 hover:opacity-80"
          >
            Aditya Rathod
            <span className="text-spring">.</span>
          </Link>
        </div>
        <div className="flex-1"></div>
        <nav className="hidden sm:hidden md:flex lg:flex xl:flex flaex-1 flex-row items-center">
          <NavLink href="/#projects" text="Projects" />
          <NavLink href="/writing" text="Writing" />
          <NavLink href="/resume.pdf" text="Resume" external />
        </nav>
      </header>
      <nav className="mt-2 pl-8 flex sm:flex md:hidden flex-1 flex-row items-a">
        <NavLink href="/#projects" text="Projects" mobile />
        <NavLink href="/writing" text="Writing" mobile />
        <NavLink href="/resume.pdf" text="Resume" external mobile />
      </nav>
    </section>
  );
}
