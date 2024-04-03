import React from 'react';
import Head from 'next/head';
import { SocialRow } from './Socials';
import NavBar from '@/components/navbar/NavbarCore';
import { PageHeader } from '../header/PageHeader';

export interface SiteLayoutProps {
  children: React.ReactNode;
  title?: string;
  accent?: string;
}

export const SiteLayout = ({ children, title, accent }: SiteLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title ? title + ' - ' : ''}14th Annual oSTEM Conference</title>
      </Head>
      <div className='flex flex-col min-h-screen bg-primary'>
        <NavBar />
        <main className='container mt-20 sm:mt-12 p-4 sm:p-8 max-w-5xl mx-auto bg-primary h-full'>
          {title ? <PageHeader accent={accent}>{title}</PageHeader> : ''}
          {children}
        </main>
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
