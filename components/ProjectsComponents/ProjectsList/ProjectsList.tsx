import { ProjectsListProps } from './ProjectsList.props';
import styles from './ProjectsList.module.css';
import { ProjectsItem } from '../ProjectsItem/ProjectsItem';
import { title } from 'process';


export const ProjectsList = ({ projects }: ProjectsListProps): JSX.Element => {
	return (
		<div className={styles.projectsDiv}>
			{projects.map(p => (
                <ProjectsItem key={p.id} id={p.id} titleId={p.titleId} title={p.title} image={p.image}
				descriptionShort={p.descriptionShort} descriptionFull={p.descriptionFull}
				problem={p.problem} link={p.link} stack={p.stack} />
            ))}
		</div>
	);
};
