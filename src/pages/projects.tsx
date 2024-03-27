import { ProjectsPage } from "../../page_components/ProjectsPage/ProjectsPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Projects(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).projects}</title>
        <meta name='description' content={setLocale(router.locale).description} />
        <meta property='og:title' content={setLocale(router.locale).projects} />
        <meta property='og:description' content={setLocale(router.locale).description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <ProjectsPage />
    </>
  );
}

export default Projects;
