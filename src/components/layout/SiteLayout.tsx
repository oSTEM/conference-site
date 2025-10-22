import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SocialRow } from './Socials';
import { faArchive, faDirections } from '@fortawesome/free-solid-svg-icons';
import { faMagic } from '@fortawesome/free-solid-svg-icons/faMagic';
import NavBar from '@/components/navbar/NavbarCore';
import { PageHeader } from '../header/PageHeader';
import { BannerMessage } from '../banner/BannerMessage';

export interface SiteLayoutProps {
  children: React.ReactNode;
  title?: string;
  accent?: string;
}

export const SiteLayout = ({ children, title, accent }: SiteLayoutProps) => {
  const router = useRouter();
  const isArchive = router.pathname.indexOf('/archive') !== -1;
  const usedRedirect = router.query.oldlink === '1';
  let updateBannerVisible = false;

  function whatsNewCloseHandler() {
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('ocf-ver', '1');
  }

  return (
    <div>
      <Head>
        <title>{title ? title + ' - ' : ''}16th Annual oSTEM Conference</title>
      </Head>
      <div className='flex flex-col min-h-screen bg-primary'>
        <NavBar />
        <div className='mt-20 sm:mt-12 p-4 sm:p-6'>
          {isArchive ? (
            <BannerMessage icon={faArchive} type='warning' closeButton={false}>
              You're viewing an <b>archived</b> page for a past conference.
              Information may not be relevant to this year's conference.
            </BannerMessage>
          ) : (
            ''
          )}
          {usedRedirect ? (
            <BannerMessage icon={faDirections} type='warning'>
              The URL for this page
              <span className='text-orange-700 dark:text-orange-200'>
                {router?.pathname ? ` (${router.pathname})` : ''}
              </span>{' '}
              has changed and you've been automatically redirected. Please
              update your link and/or bookmark.
            </BannerMessage>
          ) : (
            ''
          )}
          {/* {updateBannerVisible ? (
            <BannerMessage
              type='update'
              icon={faMagic}
              closeHandler={whatsNewCloseHandler}
            >
              Our conference website has been revamped.{' '}
              <Link href='/2024/whats-new'>
                <a>See&nbsp;what's&nbsp;new&nbsp;here.</a>
              </Link>
            </BannerMessage>
          ) : (
            ''
          )} */}

          <main className='container pt-2 max-w-5xl mx-auto bg-primary h-full'>
            {title ? <PageHeader accent={accent}>{title}</PageHeader> : ''}
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='bg-primary p-8 text-gray-700 dark:text-gray-400'>
      <div className='max-w-2xl mx-auto text-center'>
        Out in Science, Technology, Engineering, and Mathematics Incorporated
        &copy; {new Date().getFullYear()}
      </div>
      <div className='grid justify-items-center'>
        <SocialRow />
      </div>
    </footer>
  );
};
