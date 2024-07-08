import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { ProjectPage } from '../../../page_components/ProjectPage/ProjectPage';
import { getProjectByTitleId, getProjects } from '../../../helpers/projects.helper';
import { ProjectInterface } from '../../../interfaces/project.interface';
import { useDispatch } from "react-redux";
import { setProjects } from '../../../features/projects/projectsSlice';
import { useEffect } from 'react';


export default function Project({ project }: ProjectProps) {
    const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProjects(getProjects()));
	}, [dispatch]);

	if (project) {
		return (
			<>
				<Head>
					<title>{setLocale(router.locale).banana_codes + ' | ' + project.title[router.locale as 'en']}</title>
					<meta name='description' content={setLocale(router.locale).banana_codes + ' | ' + project.title[router.locale as 'en']} />
					<meta property='og:title' content={setLocale(router.locale).banana_codes + ' | ' + project.title[router.locale as 'en']} />
					<meta property='og:description' content={setLocale(router.locale).banana_codes + ' | ' + project.title} />
					<meta charSet="utf-8" />
					<link rel="icon" href="/logo.svg" type='image/svg+xml' />
				</Head>
				<ProjectPage id={project.id} />
			</>
		);
	} else {
		return <></>
	}
}

export const getServerSideProps: GetServerSideProps<ProjectProps> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    try {
        const project: ProjectInterface | undefined = getProjectByTitleId(params.project);

		if (project) {
			return {
				props: {
					project
				}
			};
		} else {
			return {
				notFound: true
			};
		}
	} catch {
		return {
			notFound: true
		};
	}
};

interface ProjectProps extends Record<string, unknown> {
	project: ProjectInterface;
}
