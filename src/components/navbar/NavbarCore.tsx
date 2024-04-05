/**
 * NavbarCore.tsx
 *
 * Responsible for rendering the new navbar at the top/side of all pages.
 * Change the links in the navbar by editing @see NavbarConfig.ts - not this file.
 *
 * Written by Rem Zhang (rem.zhang). Please reach out if you have questions.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { TextBadge } from '@/components/badge/TextBadge';
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

export const themeOpts: [IconProp, string][] = [
  [faSun, 'Light'],
  [faMoon, 'Dark'],
  [faAdjust, 'System'],
];

const ThemeSelector = ({
  currentTheme,
  setCurrentTheme,
}: {
  currentTheme?: number;
  setCurrentTheme?: Dispatch<SetStateAction<number>>;
}) => {
  if (
    typeof currentTheme !== 'number' ||
    typeof setCurrentTheme === 'undefined'
  )
    return <div></div>;
  return (
    <div className='flex text-sm cursor-default py-1 h-[44px] mr-1'>
      <p className='px-3 py-2 grow'>
        Site Theme:{' '}
        <span className='text-sky-600 dark:text-sky-300'>
          {themeOpts[currentTheme][1]}
        </span>
      </p>
      {themeOpts.map((theme, ind) => (
        <button
          title={
            ind === currentTheme ? `` : `Change to ${themeOpts[ind][1]} Theme`
          }
          className={`w-8 h-8 mt-0.5 ml-0.5 transition rounded-md border-2 ${
            ind === currentTheme
              ? 'cursor-default border-sky-500/50 text-sky-600 dark:text-sky-300'
              : 'border-transparent hover:bg-sky-500/20 active:bg-sky-500/30'
          }`}
          onClick={() => {
            setCurrentTheme(ind);
            handleThemeClick(ind);
          }}
        >
          <FontAwesomeIcon className='w-4 h-4 mx-auto mt-0.5' icon={theme[0]} />
        </button>
      ))}
    </div>
  );
};

interface DropdownProps {
  category: NavbarCategory | NavbarCategoryWithLinks;
  links: NavbarLink[];
  fill?: boolean;
  compact: boolean;
  labelOverride?: string;
  currentTheme?: number;
  setCurrentTheme?: Dispatch<SetStateAction<number>>;
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
  labelOverride,
  currentTheme,
  setCurrentTheme,
}) => {
  return (
    <div
      className={
        compact ? styles['dropdownCompactOuter'] : 'mt-2.5 mr-4 text-right'
      }
    >
      <Menu as='div' className={`relative inline-block text-left`}>
        {compact ? (
          <Menu.Button
            className={`${styles['dropdownCompact']} transition hover:bg-${category.color}/15 active:bg-${category.color}/20`}
          >
            {labelOverride ? labelOverride : category.displayName}
            <span>
              <FontAwesomeIcon
                className={`${
                  styles['dropdownIcon']
                } ${'mt-0.5 ml-1 h-3'} transition duration-270`}
                icon={faChevronDown}
              />
            </span>
          </Menu.Button>
        ) : (
          <Menu.Button
            className={`${
              styles['dropdownBtn']
            } inline-flex items-center w-full justify-center rounded-full border-2 border-${
              category.color
            } px-4 py-2 text-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-${
              category.color
            }/75 transition ${
              fill
                ? `bg-${category.color} dark:bg-${category.color}/25 dark:hover:bg-${category.color}/40 text-white hover:bg-${category.color}/70 font-semibold`
                : `hover:bg-${category.color}/15 active:bg-${category.color}/20`
            }`}
          >
            {labelOverride ? labelOverride : category.displayName}
            <span>
              <FontAwesomeIcon
                className={`${
                  styles['dropdownIcon']
                } ${'mt-0.5 ml-2 h-3.5'} transition duration-270`}
                icon={faChevronDown}
              />
            </span>
          </Menu.Button>
        )}
        <Transition
          as={Fragment}
          enter='transition ease-out'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-135'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            className={`${
              compact ? 'fixed left-2' : 'absolute right-0'
            } mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black/5 focus:outline-none dark:border dark:border-zinc-700`}
          >
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <div key={link.href} className='px-1 py-1'>
                <Menu.Item as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active
                          ? `bg-${category.color} dark:bg-${category.color}/50 text-white`
                          : 'bg-white dark:bg-zinc-900 text-black dark:text-white'
                      } group flex w-full items-center rounded-sm px-2 py-2 text-sm transition`}
                    >
                      <span className='grow'>{link.label}</span>
                      {link.badge ? (
                        <TextBadge
                          className={`${
                            link.badge.accent
                              ? `${
                                  active
                                    ? 'border-white'
                                    : `border-${category.color}`
                                } bg-${category.color} dark:bg-${
                                  category.color
                                }/50 text-white font-bold`
                              : `border-${category.color}/15 dark:border-${category.color} bg-${category.color}/15 font-normal`
                          }`}
                        >
                          {link.badge.label}
                        </TextBadge>
                      ) : (
                        ''
                      )}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
            {category.name === 'misc' ? (
              <ThemeSelector
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
            ) : (
              ''
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export interface NavbarCategoryWithLinks extends NavbarCategory {
  links: NavbarLink[];
}

export function handleThemeClick(ind: number): void {
  switch (ind) {
    case 0:
      localStorage.dark = '0';
      document.documentElement.classList.remove('dark');
      break;
    case 1:
      localStorage.dark = '1';
      document.documentElement.classList.add('dark');
      break;
    case 2:
      localStorage.removeItem('dark');
      document.documentElement.classList[
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'add'
          : 'remove'
      ]('dark');
      break;
  }
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
  const [currentTheme, setCurrentTheme] = useState(
    typeof localStorage === 'undefined'
      ? 2
      : 'dark' in localStorage
      ? localStorage.dark === '1'
        ? 1
        : 0
      : 2,
  );
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
        currentPage={currentPage}
        navCategories={NavCategories}
        sidebarStateHandler={setSidebarOpen}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <div className={`${styles.NavNew}`}>
        <div className='flex ml-2 mr-2 xl:mx-auto pb-1 border-b border-text-color max-w-7xl mx-auto'>
          <div className={`flex select-none ${styles['NavNew-inner-left']}`}>
            <Link href='/'>
              <a className='inline-block'>
                <picture>
                  <img
                    alt='oSTEM Logo'
                    className='flex h-14 sm:ml-1 mt-0.5 mx-auto img-logo'
                  />
                </picture>
              </a>
            </Link>
            <div className='hidden sm:flex ml-2 pl-2 border-l border-text-color mt-2'>
              <p className='inline-block text-xl leading-none cursor-default pb-0'>
                {currentPage ? (
                  <span
                    className={`text-${NavCategories[currentCategory].color} font-semibold`}
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
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              ></NavbarDropdown>
            ))}
          </div>
          <div className={`flex lg:hidden`}>
            <button
              className='inline-flex transition items-center w-10 h-10 justify-center rounded-md border-2 border-transparent hover:border-[#6d8b85] hover:bg-[#6d8b85]/10 active:text-[#6d8b85] active:bg-[#6d8b85]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d8b85]/75 mr-3 sm:mr-4 mt-2.5'
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FontAwesomeIcon className='w-5 h-5' icon={faBars} />
            </button>
          </div>
        </div>
        <div
          className={`flex select-none cursor-default sm:hidden border-b border-text-color ml-2 mr-2 ${styles['NavMobile']}`}
        >
          {currentPage ? (
            <div
              className={`text-${NavCategories[currentCategory].color} flex`}
            >
              <p className='font-semibold'>
                {NavCategories[currentCategory].displayName}
              </p>

              <FontAwesomeIcon
                className='text-black dark:text-white ml-1.5 mr-0.5 mt-1 w-2 h-1 font-[14px]'
                icon={faChevronRight}
              />
              <NavbarDropdown
                category={NavCategories[currentCategory]}
                links={NavCategories[currentCategory].links}
                labelOverride={currentPage.label}
                compact={true}
              ></NavbarDropdown>
            </div>
          ) : (
            <div className='flex w-full ml-0.5 mr-1'>
              <p className='grow'>
                <b>
                  14<sup>th</sup>
                </b>{' '}
                Annual Conference
              </p>
              <p className={styles['gradientText']}>Portland, OR</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
