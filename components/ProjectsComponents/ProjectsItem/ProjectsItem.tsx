import styles from './ProjectsItem.module.css';
import { ProjectInterface } from '../../../interfaces/project.interface';
import { useRouter } from 'next/router';
import { Htag } from '../../Htag/Htag';


export const ProjectsItem = ({ titleId, title, descriptionShort }: ProjectInterface): JSX.Element => {
    const router = useRouter();
    
	return (
		<div className={styles.project}>
            <h1 className={styles.title}>
                {router.locale === 'en' ? title.en : title.ru}
            </h1>
			<div className={styles.projectDiv} onClick={() => router.push('/project/' + titleId)}>
				<div className={styles.crossDiv1} />
				<div className={styles.crossDiv2} />
				<Htag tag='xl' className={styles.description}>
					{router.locale === 'en' ? descriptionShort.en : descriptionShort.ru}
				</Htag>
			</div>
		</div>
	);
};
