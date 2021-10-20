import React from "react";
import Link from "next/link";
import Head from "next/head";
import { SocialRow } from "./Socials";
import { useRouter } from "next/router";
import { Color } from "theme/Color";

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
      <div className="flex flex-col sm:flex-row min-h-screen bg-primary">
        <NavBar />
        <main className="p-4 sm:p-8 max-w-5xl mx-auto bg-primary h-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="bg-primary border-r-2 border-mulberry border-solid h-screen sm:sticky top-0">
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
        <NavLink href={"/"} color={Color.SpruceLight}>
          Conference Home
        </NavLink>
        <NavLink href={"/2021/schedule"} color={Color.SpruceLight}>
          Schedule
        </NavLink>
        <NavLink href={"/2021/hackathon"} color={Color.SpruceLight}>
          Hackathon
        </NavLink>
        <NavLink href={"/2021/sponsors"} color={Color.SpruceLight}>
          Expo
        </NavLink>
        <NavLink href={"/2021/awards"} color={Color.SpruceLight}>
          Awards
        </NavLink>
        <NavLink href={"/2021/faq"} color={Color.SpruceLight}>
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
  const router = useRouter();

  return (
    <li>
      <Link href={href} passHref>
        <a
          className={
            "block py-2 px-4 rounded text-black text-center font-display bg-tint-spruce-light"
          }
        >
          {children}
          <style jsx>{`
            a:hover {
              background: ${Color.Apricot};
            }
            a {
              background: ${router.pathname === href
                ? Color.Apricot
                : `bg-gray-50`};
              border-color: ${router.pathname === href
                ? Color.Apricot
                : `bg-gray-50`};
            }
          `}</style>
        </a>
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary p-8 text-gray-700">
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
