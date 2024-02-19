import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { ProjectPage } from '../../../page_components/ProjectPage/ProjectPage';
import { getProjectByTitleId, getProjects } from '../../../helpers/projects.helper';
import { ProjectInterface } from '../../../interfaces/project.interface';


export default function Project({ project }: ProjectProps) {
    const router = useRouter();

	return (
		<>
			<Head>
                <title>{setLocale(router.locale).banana_codes + ' | ' + project.title}</title>
                <meta name='description' content={setLocale(router.locale).banana_codes + ' | ' + project.title} />
                <meta property='og:title' content={setLocale(router.locale).banana_codes + ' | ' + project.title} />
                <meta property='og:description' content={setLocale(router.locale).banana_codes + ' | ' + project.title} />
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo.svg" type='image/svg+xml' />
			</Head>
			<ProjectPage id={project.id} titleId={project.titleId} title={project.title} image={project.image}
				descriptionShort={project.descriptionShort} descriptionFull={project.descriptionFull}
				problem={project.problem} link={project.link} stack={project.stack} notALink={project.notALink} />
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const projects: ProjectInterface[] = getProjects();
		
    const locales = ['en', 'ru'];

    const paths: any[] = [];

    projects.map(project => {
        return locales.map((locale) => {
            return paths.push({
                params: { project: project.titleId },
                locale,
            });
        });
    });

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<ProjectProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	try {
		const project: ProjectInterface = getProjectByTitleId(params.project);

		return {
			props: {
				project
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface ProjectProps extends Record<string, unknown> {
	project: ProjectInterface;
}
