import { Fragment, Dispatch, SetStateAction } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { NavbarCategoryWithLinks } from './NavbarCore';
import Link from 'next/link';

interface SidebarProps {
  active: boolean;
  navCategories: NavbarCategoryWithLinks[];
  sidebarStateHandler: Dispatch<SetStateAction<boolean>>;
}

const SideBar: React.FC<SidebarProps> = ({
  active,
  navCategories,
  sidebarStateHandler,
}) => {
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
          className='fixed z-10 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm'
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
          className={`fixed right-0 w-full sm:w-80 top-0 h-full bg-white/80 backdrop-blur-md z-20`}
        >
          <div className='flex'>
            <Link href='/'>
              <a className='inline-block'>
                <img
                  alt='oSTEM'
                  src='/logo-banner.png'
                  className='flex h-14 ml-4 sm:ml-2 mt-0.5 mx-auto'
                />
              </a>
            </Link>
            <span className='flex-grow'></span>
            <button
              className='inline-flex transition items-center w-10 h-10 justify-center rounded-md border-2 border-transparent hover:border-[#6d8b85] hover:bg-[#6d8b85]/10 active:text-[#6d8b85] active:bg-[#6d8b85]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d8b85]/75 mr-5 sm:mr-4 mt-2.5'
              onClick={() => sidebarStateHandler(false)}
            >
              <FontAwesomeIcon className='w-5 h-5' icon={faTimes} />
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default SideBar;
