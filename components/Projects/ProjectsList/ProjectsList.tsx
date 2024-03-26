import { ProjectsListProps } from './ProjectsList.props';
import styles from './ProjectsList.module.css';
import { ProjectsItem } from '../ProjectsItem/ProjectsItem';
import { title } from 'process';


export const ProjectsList = ({ projects, itemsCount }: ProjectsListProps): JSX.Element => {
	return (
		<div className={styles.projectsDiv}>
			{projects.slice(0, itemsCount).map(p => (
                <ProjectsItem key={p.id} id={p.id} titleId={p.titleId} title={p.title} image={p.image}
					descriptionShort={p.descriptionShort} descriptionFull={p.descriptionFull}
					problem={p.problem} link={p.link} stack={p.stack} />
            ))}
		</div>
	);
};
