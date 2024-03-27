/**
 * NavbarCore.tsx
 *
 * Responsible for rendering the new navbar at the top/side of all pages.
 * Change the links in the navbar by editing @see NavbarConfig.ts - not this file.
 *
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */

import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { NAVBAR_CATEGORIES, NAVBAR_LINKS } from './NavbarConfig';
import SideBar from './NavbarSidebar';
import styles from './Navbar.module.css';

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
  category: NavbarCategory | NavbarCategoryWithLinks;
  links: NavbarLink[];
  fill: boolean;
  compact: boolean;
}

/**
 * Creates a selectable dropdown to navigate between pages.
 *
 * @param {NavbarCategory} category - Which category to pull a label and base color from
 * @param {NavbarLink[]} links - Array of links to render when dropdown is selected
 * @param {boolean} compact - True for a compact, mobile friendly render (no background, no border, small text)
 * @param {boolean} fill - True to fill the button with the accent color (rather than applying it only to the border)
 * @returns {React.FC<DropdownProps>} Dropdown component
 */
const NavbarDropdown: React.FC<DropdownProps> = ({
  category,
  links,
  fill,
  compact,
}) => {
  return (
    <div className='mt-2.5 mr-4 text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button
          className={`${
            styles['dropdownBtn']
          } inline-flex items-center w-full justify-center rounded-full border-2 border-${
            category.color
          } px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-${
            category.color
          }/75 transition ${
            fill
              ? `bg-${category.color} text-white hover:bg-${category.color}/70 font-semibold`
              : `hover:bg-${category.color}/20`
          }`}
        >
          {`${category.displayName} `}
          <span>
            <FontAwesomeIcon
              className={styles['dropdownIcon']}
              icon={faChevronDown}
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-135'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <div key={link.href} className='px-1 py-1'>
                <Menu.Item as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? `bg-${category.color} text-white`
                          : 'bg-white text-black'
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

export interface NavbarCategoryWithLinks extends NavbarCategory {
  links: NavbarLink[];
}

/**
 * Sorts a 1D array of navbar links into categories by adding a new links property to each category.
 *
 * @param cat - Array of navbar categories to sort links into
 * @param links - Array of links to sort
 * @returns {NavbarCategoryWithLinks[]}
 */
function categorizeNavbarLinks(
  cat: NavbarCategory[],
  links: NavbarLink[],
  currentPage: NavbarLink | undefined,
) {
  let out: NavbarCategoryWithLinks[] = cat.map((r) =>
    Object.assign(r, { links: [] }),
  );
  let currentCategory = -1;
  for (let link of links) {
    let o = out.findIndex((r) => r.name === link.category);
    if (o !== -1) {
      out[o].links.push(link);
      if (link.href === currentPage?.href) {
        currentCategory = o;
      }
    } else {
      console.warn(
        `NavbarLink: Link ${JSON.stringify(
          link,
        )} does not have a valid category.`,
      );
    }
  }
  return [out, currentCategory] as [NavbarCategoryWithLinks[], number];
}

export default function NavBar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPage = NAVBAR_LINKS.find(
    (link) => link.href === router.pathname,
  );

  const [NavCategories, currentCategory] = categorizeNavbarLinks(
    NAVBAR_CATEGORIES,
    NAVBAR_LINKS,
    currentPage,
  );

  return (
    <div>
      <SideBar
        active={sidebarOpen}
        navCategories={NavCategories}
        sidebarStateHandler={setSidebarOpen}
      />
      <div className={`${styles.NavNew}`}>
        <div className='flex pb-1 border-b border-black max-w-7xl mx-auto'>
          <div className={`flex select-none ${styles['NavNew-inner-left']}`}>
            <Link href='/'>
              <a className='inline-block'>
                <img
                  alt='oSTEM'
                  src='/logo-banner.png'
                  className='flex h-14 ml-4 sm:ml-1 mt-0.5 mx-auto'
                />
              </a>
            </Link>
            <div className='hidden sm:flex ml-2 pl-2 border-l border-black mt-2'>
              <p className='inline-block text-xl leading-none cursor-default pb-0'>
                {currentPage ? (
                  <span
                    className={`text-${NavCategories[currentCategory].color}`}
                  >
                    {currentPage.label}
                  </span>
                ) : (
                  <span>
                    <b>
                      14<sup>th</sup>
                    </b>{' '}
                    Annual Conference
                  </span>
                )}
                <br></br>
                {currentPage ? (
                  <span className='text-sm'>
                    <b>
                      14<sup>th</sup>
                    </b>{' '}
                    Annual Conference
                  </span>
                ) : (
                  <span className={`text-sm ${styles['gradientText']}`}>
                    <b>Portland, OR</b> - Oct 17-20, 2024
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className={`hidden lg:flex`}>
            {NavCategories.map((categoryWithLink: NavbarCategoryWithLinks) => (
              <NavbarDropdown
                key={categoryWithLink.name}
                category={categoryWithLink}
                links={categoryWithLink.links}
                compact={false}
                fill={
                  categoryWithLink.name === NavCategories[currentCategory]?.name
                }
              ></NavbarDropdown>
            ))}
          </div>
          <div className={`flex lg:hidden`}>
            <button
              className='inline-flex transition items-center w-10 h-10 justify-center rounded-md border-2 border-transparent hover:border-[#6d8b85] hover:bg-[#6d8b85]/10 active:text-[#6d8b85] active:bg-[#6d8b85]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d8b85]/75 mr-5 sm:mr-4 mt-2.5'
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FontAwesomeIcon className='w-5 h-5' icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
