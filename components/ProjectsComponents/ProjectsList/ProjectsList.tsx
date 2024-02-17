import { ProjectsListProps } from './ProjectsList.props';
import styles from './ProjectsList.module.css';
import { ProjectsItem } from '../ProjectsItem/ProjectsItem';


export const ProjectsList = ({ projects }: ProjectsListProps): JSX.Element => {
	return (
		<div className={styles.projectsDiv}>
			{projects.map(p => (
                <ProjectsItem key={p.id} id={p.id} title={p.title} image={p.image} descriptionShort={p.descriptionShort} />
            ))}
		</div>
	);
};
