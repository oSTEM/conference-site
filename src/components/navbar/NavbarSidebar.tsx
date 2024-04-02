import { Menu, Transition } from '@headlessui/react';
import { Fragment, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import {
  NavbarLink,
  NavbarCategoryWithLinks,
  themeOpts,
  handleThemeClick,
} from './NavbarCore';
import { TextBadge } from '@/components/badge/TextBadge';
import Link from 'next/link';

interface LinkGroup {
  category: NavbarCategoryWithLinks;
  active: string | boolean;
}

const LinkGroup: React.FC<LinkGroup> = ({ category, active }) => {
  return (
    <div>
      <h2
        className={`text-${category.color} font-semibold text-2xl leading-none`}
      >
        {category.displayName}
      </h2>
      <div className={`border-l-2 border-${category.color} ml-0.5 mb-4`}>
        {category.links.map((link) => (
          <Link key={link.label} href={link.href}>
            <a className='text-black dark:text-white'>
              <p
                className={`pl-2 transition rounded-r-full hover:bg-${
                  category.color
                }/15 ${
                  active === link.href
                    ? `text-${category.color} font-semibold cursor-default`
                    : `active:bg-${category.color}/20 cursor-pointer`
                }`}
                title={active === link.href ? `You're already here!` : ''}
              >
                {link.label}
                {link.badge ? (
                  <TextBadge
                    className={`ml-1 ${
                      link.badge.accent
                        ? `border-${category.color} bg-${category.color} dark:bg-${category.color}/50 text-white font-bold`
                        : `border-${category.color}/15 dark:border-${category.color} bg-${category.color}/15 font-normal`
                    }`}
                  >
                    {link.badge.label}
                  </TextBadge>
                ) : (
                  ''
                )}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

interface SidebarProps {
  active: boolean;
  currentPage?: NavbarLink | undefined;
  navCategories: NavbarCategoryWithLinks[];
  sidebarStateHandler: Dispatch<SetStateAction<boolean>>;
  currentTheme: number;
  setCurrentTheme: Dispatch<SetStateAction<number>>;
}

const SideBar: React.FC<SidebarProps> = ({
  active,
  currentPage,
  navCategories,
  sidebarStateHandler,
  currentTheme,
  setCurrentTheme,
}) => {
  let highlight = currentPage?.href || false;

  return (
    <div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-360'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in duration-270'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        show={active}
      >
        <div
          onClick={() => sidebarStateHandler(false)}
          className='fixed z-10 top-0 left-0 w-full h-full bg-black/40 dark:bg-black/20 backdrop-blur-sm'
        ></div>
      </Transition>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-360'
        enterFrom='transform translate-x-full opacity-0'
        enterTo='transform translate-x-0 opacity-100'
        leave='transition ease-in duration-270'
        leaveFrom='transform translate-x-0 opacity-100'
        leaveTo='transform translate-x-full opacity-0'
        show={active}
      >
        <div
          className={`fixed flex flex-col right-0 w-full sm:w-80 top-0 h-full bg-white/80 dark:bg-black/50 backdrop-blur-md z-20`}
        >
          <div className='flex border-b ml-2 mr-2 border-text-color'>
            <Link href='/'>
              <a className='inline-block'>
                <img
                  alt='oSTEM'
                  className='flex h-14 mt-0.5 mb-1 mx-auto img-logo'
                />
              </a>
            </Link>
            <span className='flex-grow'></span>
            <Menu>
              <Menu.Button className='inline-flex transition items-center w-10 h-10 justify-center rounded-md border-2 border-transparent hover:border-nav-accent hover:bg-nav-accent/10 active:text-nav-accent active:bg-nav-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-accent/75 mr-2 mt-2.5'>
                <FontAwesomeIcon
                  className={`w-5 h-5 ${
                    currentTheme === 2 ? '' : 'text-sky-600 dark:text-sky-300'
                  }`}
                  icon={themeOpts[currentTheme][0]}
                />
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
                <Menu.Items className='cursor-default mt-2 w-28 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black/5 focus:outline-none dark:border dark:border-zinc-700 absolute right-[68px] top-12 overflow-hidden'>
                  <p className='px-2 text-sm font-semibold'>Site Theme</p>
                  {themeOpts.map((theme, ind) => (
                    <div key={ind}>
                      <Menu.Item as={Fragment}>
                        {({ active }) => (
                          <button
                            className={`cursor-pointer text-black dark:text-white group flex w-full items-center px-2 py-2 text-sm transition ${
                              active
                                ? `bg-nav-accent/40`
                                : `bg-white dark:bg-zinc-900`
                            }`}
                            onClick={() => {
                              setCurrentTheme(ind);
                              handleThemeClick(ind);
                            }}
                          >
                            <FontAwesomeIcon
                              className='w-5 h-5 mr-2'
                              icon={theme[0]}
                            />{' '}
                            {theme[1]}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              className='inline-flex transition items-center w-10 h-10 justify-center rounded-md border-2 border-transparent hover:border-nav-accent hover:bg-nav-accent/10 active:text-nav-accent active:bg-nav-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-accent/75 mr-3 mt-2.5'
              onClick={() => sidebarStateHandler(false)}
            >
              <FontAwesomeIcon className='w-5 h-5' icon={faTimes} />
            </button>
          </div>
          <div className='p-4 overflow-y-auto'>
            {navCategories.map((category) => (
              <LinkGroup
                key={category.name}
                category={category}
                active={
                  category.name === currentPage?.category ? highlight : false
                }
              ></LinkGroup>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default SideBar;
