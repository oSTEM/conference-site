import { Fragment, Dispatch, SetStateAction } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { NavbarLink, NavbarCategoryWithLinks } from './NavbarCore';
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
}

const SideBar: React.FC<SidebarProps> = ({
  active,
  currentPage,
  navCategories,
  sidebarStateHandler,
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
            <button
              className='inline-flex transition items-center w-10 h-10 justify-center rounded-md border-2 border-transparent hover:border-[#6d8b85] hover:bg-[#6d8b85]/10 active:text-[#6d8b85] active:bg-[#6d8b85]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d8b85]/75 mr-3 mt-2.5'
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
