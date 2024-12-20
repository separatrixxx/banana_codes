import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script1"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K948Z8V2');`
          }}
        />
        {/* End Google Tag Manager */}
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(96879963, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/96879963" alt="" style={{ position: 'absolute', left: '-9999px' }} />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        <meta name="yandex-verification" content="5c5bca2b0ff92391" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" sizes="120x120" type="image/svg+xml" />
        <link rel="icon" href="/favicon-48x48.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-144x144.ico" sizes="144x144" type="image/x-icon" />
        <link rel="icon" href="/favicon-192x192.ico" sizes="192x192" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-167x167.ico" sizes="167x167" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-180x180.ico" sizes="180x180" type="image/x-icon" />
      </Head>
      <Script
        id="gtm-script2"
        async src="https://www.googletagmanager.com/gtag/js?id=G-HXG43C4S8G"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HXG43C4S8G');
          `,
        }}
      />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K948Z8V2"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
        </iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
