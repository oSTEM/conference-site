import './_app.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
