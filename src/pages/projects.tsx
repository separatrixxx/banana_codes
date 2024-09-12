import { ProjectsPage } from "../../page_components/ProjectsPage/ProjectsPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";
import { useDispatch } from "react-redux";
import { setProjects } from '../../features/projects/projectsSlice';
import { getProjects } from '../../helpers/projects.helper';
import { useEffect } from "react";


function Projects(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(getProjects()));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).banana_codes + ' | ' + setLocale(router.locale).projects}</title>
        <meta name='description' content={setLocale(router.locale).description} />
        <meta property='og:title' content={setLocale(router.locale).banana_codes + ' | ' + setLocale(router.locale).projects} />
        <meta property='og:description' content={setLocale(router.locale).description} />
        <meta charSet="utf-8" />
      </Head>
      <ProjectsPage />
    </>
  );
}

export default Projects;
