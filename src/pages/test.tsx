import { TestPage } from "../../page_components/TestPage/TestPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Test(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).banana_codes}</title>
        <meta name='description' content={setLocale(router.locale).description} />
        <meta property='og:title' content={setLocale(router.locale).banana_codes} />
        <meta property='og:description' content={setLocale(router.locale).description} />
        <meta charSet="utf-8" />
      </Head>
      <TestPage />
    </>
  );
}

export default Test;
