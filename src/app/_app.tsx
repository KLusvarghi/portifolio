import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

    </AppCacheProvider>
  );
}