import styles from './ProjectsItem.module.css';
import { ProjectInterface } from '../../../interfaces/project.interface';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Htag } from '../../Htag/Htag';
import { CrossBlock } from '../../Cross/CrossBlock';


export const ProjectsItem = ({ id, title, image }: ProjectInterface): JSX.Element => {
    const router = useRouter();
    
	return (
		<div className={styles.project} onClick={() => router.push('/project/' + id)}>
            <h1 className={styles.title}>
                {title}
            </h1>
			
		</div>
	);
};
