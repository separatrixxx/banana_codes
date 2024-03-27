import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { setLocale } from '../../helpers/locale.helper';


declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-HXG43C4S8G');
  }, []);
  
  return (
    <>
      <Head>
        <title>{setLocale(router.locale).banana_codes}</title>
        <meta name='description' content={setLocale(router.locale).banana_codes} />
        <meta property='og:title' content={setLocale(router.locale).banana_codes} />
        <meta property='og:description' content={setLocale(router.locale).banana_codes} />
        <meta charSet="utf-8" />
        <meta name="yandex-verification" content="5c5bca2b0ff92391" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
