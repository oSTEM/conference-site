/**
 * Navbar.js
 *
 * Responsible for rendering the new navbar at the top of all pages.
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */

import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import Link from "next/link";
import { Fragment, useState } from "react";
import styles from "./Navbar.module.css";

function DropdownLinkExample() {
  const links = [
    { href: "/2024/rfp", label: "Request for Programs" },
    { href: "/2023/cfp", label: "Call for Posters" },
    { href: "/", label: "[dev] Home" },
  ];
  return (
    <div className="top-16 mr-4 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md border-2 border-transparent px-4 py-2 text-sm font-medium hover:bg-green-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
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
              <div className="px-1 py-1">
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? "bg-green-700 text-white"
                          : "bg-white text-black"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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

export function DropdownExample() {
  return (
    <div className="top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Say Hello
            <FontAwesomeIcon
              className={styles["dropdownIcon"]}
              icon={faChevronDown}
            />
          </Menu.Button>
        </div>
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
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-purple text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Hello world!
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={"/2024/partnership"}>
                    <button
                      className={`${
                        active ? "bg-purple text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Partnerships
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-purple text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Hi Everyone Else
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-purple text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Goodbye
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className={styles.NavNew}>
      <div className={styles["NavNew-inner"]}>
        <div className={styles["NavNew-inner-left"]}>
          <Link href="/">
            <a className="inline-block">
              <img
                alt="oSTEM"
                src="/logo-banner.png"
                className="flex max-w-[12rem] mx-auto"
              />
            </a>
          </Link>
          <p className="inline-block">14th Annual Conference</p>
        </div>
        <div className={styles["NavNew-inner-right"]}>
          {/* <DropdownLinkExample /> */}
          <DropdownLinkExample />
        </div>
      </div>
    </div>
  );
}
