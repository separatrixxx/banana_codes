import { ProjectSlideProps } from './ProjectSlide.props';
import styles from './ProjectSlide.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useRouter } from 'next/router';
import Link from 'next/link';


export const ProjectSlide = ({ project }: ProjectSlideProps): JSX.Element => {
    const router = useRouter();
    
	return (
		<Link href={'/project/' + project.titleId}>
			<div className={styles.projectSlide} style={{ background: project.color }}>
				<Htag tag='xxl' className={styles.title}>
					{project.emoji + ' ' + project.title[router.locale as 'en']}
				</Htag>
			</div>
		</Link>
	);
};