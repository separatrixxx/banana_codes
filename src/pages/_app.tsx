import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { wrapper } from '../../features/store/store';
import { Provider } from 'react-redux';


declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-HXG43C4S8G');
  }, []);

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebDesign",
    "name": "banana codes",
    "url": "https://www.banana.codes",
    "logo": "https://www.banana.codes/logo.svg",
    "description": "banana codes — веб-студия, специализирующаяся на создании сложных веб-приложений. Мы создаём интернет-магазины, веб-экосистемы, социальные сети и многое другое. Также мы разрабатываем лендинги, сайты-визитки любой сложности, работаем с WordPress и OpenCart и создаём собственные проекты.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "Россия"
    },
    "telephone": "+79203290807",
    "email": "banana.info@banana.codes",
    "founder": "Никита Лохматов",
    "sameAs": [
      "https://www.vk.com/separatrix",
    ]
  };
  
  return (
    <Provider store={store}>
      <Head>
        <title>{setLocale(router.locale).banana_codes}</title>
        <meta name='description' content={setLocale(router.locale).description} />
        <meta property='og:title' content={setLocale(router.locale).banana_codes} />
        <meta property='og:description' content={setLocale(router.locale).description} />
        <meta charSet="utf-8" />
        <meta name="yandex-verification" content="5c5bca2b0ff92391" />
        <link rel="icon" href="/favicon.svg" sizes="120x120" type="image/svg+xml" />
        <link rel="icon" href="/favicon-48x48.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-144x144.ico" sizes="144x144" type="image/x-icon" />
        <link rel="icon" href="/favicon-192x192.ico" sizes="192x192" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-167x167.ico" sizes="167x167" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-180x180.ico" sizes="180x180" type="image/x-icon" />
      </Head>
      <Script 
        id="schema-script"
        type="application/ld+json" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
