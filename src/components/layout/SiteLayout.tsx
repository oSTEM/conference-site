import React from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { SocialRow } from "./Socials";
import { useRouter } from "next/router";
import { Color } from "theme/Color";
import NavBar from "components/Navbar";

export interface SiteLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const SiteLayout = ({ children, title }: SiteLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title ? title + " | " : ""}14th Annual oSTEM Conference</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-primary">
        {/* <NavBarLegacy /> */}
        <NavBar />
        <main className="container p-4 sm:p-8 max-w-5xl mx-auto bg-primary h-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

// import { Fragment, useEffect, useRef, useState } from 'react'

export function NavBarLegacy() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="md:fixed">
      <nav className="bg-primary border-r-2 border-deepwater border-solid ">
        <Link href="/">
          <a className="flex p-8">
            <img
              alt="oSTEM"
              src="/logo-banner.png"
              className="flex max-w-[12rem] mx-auto"
            />
          </a>
        </Link>

        <section className="flex md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col justify-between list-none">
              <NavBarLinks></NavBarLinks>
            </ul>
          </div>
        </section>

        <ul className="flex flex-col p-4 max-h-screen min-h-screen list-none hidden md:block">
          <NavBarLinks></NavBarLinks>
        </ul>
      </nav>
      <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    .rem-inline {
      // display: inline-block
    }
  `}</style>
    </div>
  );
}

const NavBarLinks = () => {
  return (
    <div className="space-y-4">
      <NavLink href={"/2023/schedule"} color={Color.Amber}>
        Schedule
      </NavLink>
      <NavLink href={"/2023/expo"} color={Color.Frost}>
        Career & Grad School Expo
      </NavLink>
      <NavLink href={"/2023/attendee-guide"} color={Color.Purple}>
        Attendee Resources
      </NavLink>
      <NavLink href={"/2023/partnership"} color={Color.Linen}>
        Partnerships
      </NavLink>
      <NavLink href={"#"} color={Color.oSTEMBlue}>
        Coming Soon - Registration
      </NavLink>
      <NavLink href={"/2023/recap"} color={Color.Raspberry}>
        2022 Recap
      </NavLink>
      <NavLink href={"#"} color={Color.Mulberry}>
        Coming Soon - Call for Posters
      </NavLink>
      <NavLink href={"/2024/rfp"} color={Color.ChillGreen}>
        Request for Proposals
      </NavLink>
    </div>
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
            "block py-2 px-4 rounded text-black text-center font-display bg-tint-deepwater-light"
          }
        >
          {children}
          <style jsx>{`
            a:hover {
              background: ${color};
            }
            a {
              background: ${router.pathname === href ? color : `bg-gray-50`};
              border-color: ${router.pathname === href ? color : `bg-gray-50`};
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
