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
			<div id='imageBlock' className={styles.imageBlock}>
				<Image className={styles.image} draggable='false'
					loader={() => image}
					src={image}
					alt='image'
					width={1}
					height={1}
					unoptimized={true}
					priority={true}
				/>
			</div>
			
		</div>
	);
};
