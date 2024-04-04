import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const BannerMessage = ({
  icon,
  type,
  children,
}: {
  icon: IconDefinition;
  type?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='flex bg-purple-400/20 max-w-7xl mx-auto mb-4 rounded overflow-hidden'>
      <span className='pl-2 py-1 text-fuchsia-200'>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </span>
      <span className='grow p-1 px-2'>{children}</span>
      <button className='px-3 py-1 opacity-80 hover:opacity-100 hover:bg-black/15 active:bg-black/25 dark:hover:bg-white/15 dark:active:bg-white/25 transition'>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};
