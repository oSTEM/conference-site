import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export const BannerMessage = ({
  icon,
  type,
  children,
  closeButton,
  closeHandler,
}: {
  icon: IconDefinition;
  type?: string;
  children: React.ReactNode;
  closeButton?: boolean;
  closeHandler?: Function;
}) => {
  let [showBanner, setShowBanner] = useState(true);
  const themes: { [key: string]: string[] } = {
    default: ['bg-purple-400/20', 'text-fuchsia-700 dark:text-fuchsia-200'],
    warning: ['bg-orange-600/15', 'text-orange-700 dark:text-orange-200'],
  };
  let theme = themes['default'];
  if (typeof type === 'string') {
    theme = type in themes ? themes[type] : themes['default'];
  }
  function closeBanner() {
    setShowBanner(false);
    if (typeof closeHandler === 'function') {
      setTimeout(() => {
        closeHandler();
      }, 400);
    }
  }
  return (
    <Transition
      as={Fragment}
      leave='transition-all ease-in duration-360'
      leaveFrom='opacity-100 max-h-20 overflow-hidden'
      leaveTo='opacity-0 max-h-0 overflow-hidden'
      show={showBanner}
    >
      <div
        className={`flex ${theme[0]} max-w-7xl mx-auto mb-2 rounded cursor-default select-none`}
      >
        <span className={`pl-2 py-1 ${theme[1]}`}>
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </span>
        <span className='grow p-1 px-2'>{children}</span>
        {closeButton === false ? (
          ''
        ) : (
          <button
            className='px-3 py-1 rounded-r opacity-70 hover:opacity-100 hover:bg-black/15 active:bg-black/25 dark:hover:bg-white/15 dark:active:bg-white/25 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white'
            onClick={closeBanner}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>
    </Transition>
  );
};
