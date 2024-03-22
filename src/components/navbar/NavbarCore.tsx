/**
 * NavbarCore.tsx
 *
 * Responsible for rendering the new navbar at the top of all pages.
 * Change the links in the navbar by editing @see NavbarConfig.ts - not this file.
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */

import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import Link from "next/link";
import { Fragment, useState } from "react";
import styles from "./Navbar.module.css";
import { NAVBAR_CATEGORIES, NAVBAR_LINKS } from "./NavbarConfig";

export interface NavbarCategory {
  name: string;
  displayName: string;
  color: string;
}

export interface NavbarLink {
  category: string;
  label: string;
  href: string;
  badge?: NavbarBadge;
}

interface NavbarBadge {
  label: string;
  accent?: boolean;
}

interface DropdownProps {
  links: NavbarLink[];
}

const NavbarDropdown: React.FC<DropdownProps> = ({ links }) => {
  return (
    <div className="mt-2.5 mr-4 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-full border-2 border-green-600 px-4 py-2 text-sm font-medium hover:bg-green-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/75 transition">
          Attend{" "}
          <FontAwesomeIcon
            className={styles["dropdownIcon"]}
            icon={faChevronDown}
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <div key={link.href} className="px-1 py-1">
                <Menu.Item as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? "bg-green-700 text-white"
                          : "bg-white text-black"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm transition`}
                    >
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

function DropdownLinkExample() {
  const links = [
    { href: "/2024/rfp", label: "Request for Programs" },
    { href: "/2023/cfp", label: "Call for Posters" },
    { href: "/", label: "[dev] Home" },
  ];
  return (
    <div className="mt-2.5 mr-4 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-full border-2 border-green-600 px-4 py-2 text-sm font-medium hover:bg-green-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/75 transition">
          Attend{" "}
          <FontAwesomeIcon
            className={styles["dropdownIcon"]}
            icon={faChevronDown}
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <div key={link.href} className="px-1 py-1">
                <Menu.Item as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? "bg-green-700 text-white"
                          : "bg-white text-black"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm transition`}
                    >
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className={styles.NavNew}>
      <div className="flex pb-1 border-b border-black max-w-7xl mx-auto">
        <div className={`flex ${styles["NavNew-inner-left"]}`}>
          <Link href="/">
            <a className="inline-block">
              <img
                alt="oSTEM"
                src="/logo-banner.png"
                className="flex h-14 mt-0.5 mx-auto"
              />
            </a>
          </Link>
          <div className="ml-2 pl-2 border-l border-black mt-2">
            <p className="inline-block text-xl leading-none pb-0">
              <b>
                14<sup>th</sup>
              </b>{" "}
              Annual Conference
              <br></br>
              <span className={`text-sm ${styles["gradientText"]}`}>
                <b>Portland, OR</b> - Oct 17-20, 2024
              </span>
            </p>
          </div>
        </div>
        <div className={styles["NavNew-inner-right"]}>
          {/* <DropdownLinkExample /> */}
          <NavbarDropdown links={NAVBAR_LINKS}></NavbarDropdown>
        </div>
      </div>
    </div>
  );
}
