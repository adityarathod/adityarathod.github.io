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
      <header className="mt-3 py-3 flex flex-row items-center justify-between sm:justify-between md:justify-start">
        <div className="mr-0 sm:mr-0 md:mr-8 lg:mr-10 text-center">
          <Link
            href="/"
            className="font-bold text-2xl text-white opacity-100 hover:opacity-80"
          >
            aditya
            <span className="text-spring">.</span>
          </Link>
        </div>
        <div className="flex-1"></div>
        <nav className="hidden sm:hidden md:flex flex-row items-center">
          <NavLink href="/#projects" text="Projects" />
          <NavLink href="/writing" text="Writing" />
        </nav>
      </header>
      <nav className="mt-2 flex sm:flex md:hidden flex-1 flex-row">
        <NavLink href="/#projects" text="Projects" mobile />
        <NavLink href="/writing" text="Writing" mobile />
      </nav>
    </section>
  );
}

// export default function Navbar() {
//   return (
//     <section>
//       <header className="text-center mt-3 py-3">
//         <Link
//           href="/"
//           className="font-bold text-2xl text-white opacity-100 hover:opacity-80"
//         >
//           Aditya Rathod
//           <span className="text-spring">.</span>
//         </Link>
//       </header>
//     </section>
// <section>
//   <header className="mt-3 py-3 flex flex-row items-center justify-between sm:justify-between md:justify-start">
//     <div className="mr-0 sm:mr-0 md:mr-8 lg:mr-10 text-center">
//       <Link
//         href="/"
//         className="font-bold text-2xl text-white opacity-100 hover:opacity-80"
//       >
//         Aditya Rathod
//         <span className="text-spring">.</span>
//       </Link>
//     </div>
//     <div className="flex-1"></div>
//     <nav className="hidden sm:hidden md:flex flex-row items-center">
//       <NavLink href="/#projects" text="Projects" />
//       <NavLink href="/writing" text="Writing" />
//     </nav>
//   </header>
//   <nav className="mt-2 flex sm:flex md:hidden flex-1 flex-row">
//     <NavLink href="/#projects" text="Projects" mobile />
//     <NavLink href="/writing" text="Writing" mobile />
//   </nav>
//     // </section>
//   );
// }
