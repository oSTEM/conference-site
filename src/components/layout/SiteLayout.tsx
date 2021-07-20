import React from "react";
import Link from "next/link";
import Head from "next/head";
import { SocialRow } from "./Socials";

export interface SiteLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const SiteLayout = ({ children, title }: SiteLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title ? title + " | " : ""}11th Annual oSTEM Conference</title>
      </Head>
      <div className={"flex flex-col sm:flex-row min-h-screen"}>
        <NavBar />
        <main className="p-4 sm:p-8 max-w-3xl mx-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

const colors = ["red", "amber", "green", "blue", "purple", "pink"];

const NavBar = () => {
  return (
    <nav className="bg-gray-50">
      <Link href="/">
        <a className="block p-8">
          <img
            alt="oSTEM"
            src="/logo-banner.png"
            className="block max-w-[12rem] mx-auto"
          />
        </a>
      </Link>
      <ul className="flex flex-col space-y-4 p-4 max-h-screen list-none">
        <NavLink href={"/"} color={colors[0]}>
          Conference Home
        </NavLink>
        <NavLink href={"/2021/rfp"} color={colors[1]}>
          Request for Proposals
        </NavLink>
        <NavLink href={"/2021/cfp"} color={colors[2]}>
          Call for Presentations
        </NavLink>
        <NavLink href={"/2021/schedule"} color={colors[3]}>
          Schedule
        </NavLink>
        <NavLink href={"/2021/sponsors"} color={colors[4]}>
          Sponsors
        </NavLink>
        <NavLink href={"/2021/awards"} color={colors[5]}>
          Awards
        </NavLink>
        <NavLink href={"/2021/faq"} color={colors[6]}>
          FAQ
        </NavLink>
      </ul>
    </nav>
  );
};

const NavLink = ({
  children,
  href,
  color,
}: {
  children: string;
  href: string;
  color: string;
}) => {
  return (
    <li>
      <Link href={href} passHref>
        <a
          className="block py-2 px-4 rounded-full border-solid border-2  text-black text-center font-display hover:underline focus:underline"
          style={{ borderColor: `var(--color-${color})` }}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 p-8 text-gray-700">
      <div className="max-w-2xl mx-auto text-center">
        Out in Science, Technology, Engineering, and Mathematics Incorporated
        &copy; {new Date().getFullYear()}
      </div>
      <div className="grid justify-items-center">
        <SocialRow />
      </div>
    </footer>
  );
};
