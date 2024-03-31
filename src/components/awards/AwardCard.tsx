import Link from 'next/dist/client/link';
import React from 'react';

import styles from './AwardCard.module.css';

/**
 * Generate a card component for each award
 * Display award name, description, two buttons
 */
export const AwardCard = ({
  borderColor = 'border-red-500',
  title,
  desc,
  elig,
  alert,
  nominateUrl,
  awardDetailUrl,
  nominationClosed = false,
}: {
  borderColor: string;
  title: string;
  desc: string;
  elig: Array<string>;
  // text alert
  alert?: string;
  // jotform to nominate someone
  nominateUrl: string;
  // link to award detail page (e.g. "\2023\awards-global-service")
  awardDetailUrl: string;
  // to disable the nomination button
  nominationClosed: boolean;
}) => {
  return (
    <div
      className={`border-solid px-4 py-2 my-4 border-4 ${borderColor} flex flex-col `}
    >
      <h3 className={'font-bold'}>{title}</h3>
      <p>{desc}</p>
      <h4>Eligibility:</h4>
      <ul>
        {elig?.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      {alert && (
        <p className={'text-sm italic my-1 text-gray-500 dark:text-gray-300'}>
          {'* ' + alert}
        </p>
      )}
      <div className='flex flex-row mt-2'>
        <AwardCardButton url={awardDetailUrl}>
          View Previous Awardees
        </AwardCardButton>
        {!nominationClosed && (
          <AwardCardButton url={nominateUrl}>
            Nominate Someone for this Award
          </AwardCardButton>
        )}
      </div>
    </div>
  );
};

export const AwardCardButton = ({
  children,
  disabled = false,
  url,
}: {
  // the label for the button
  children: string;
  // if this button should be disabled
  disabled?: boolean;
  // the hyperlink to another page
  url?: string;
}) => {
  const commonProps = {
    className: styles.AwardCard,
  };

  const button = (() => {
    // if this url is a jotform
    if (url?.startsWith('https')) {
      return (
        <a {...commonProps} href={disabled ? undefined : url} target='_blank'>
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={url ? url : '/404'}>
        <a {...commonProps}>
          <span>{children}</span>
        </a>
      </Link>
    );
  })();

  return <>{button}</>;
};
