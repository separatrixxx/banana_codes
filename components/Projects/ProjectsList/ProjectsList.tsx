import { ProjectsListProps } from './ProjectsList.props';
import styles from './ProjectsList.module.css';
import { ProjectsItem } from '../ProjectsItem/ProjectsItem';
import { ControlsBar } from '../../Controls/ControlsBar/ControlsBar';
import { useState } from 'react';
import { getProjectByTitleId } from '../../../helpers/projects.helper';
import cn from 'classnames';


export const ProjectsList = ({ type, projects, itemsCount }: ProjectsListProps): JSX.Element => {
	const [titleId, setTitleId] = useState<string>('gemuani');
	
	if (type === 'list') {
		return (
			<div className={styles.projectsDiv}>
				{projects.slice(0, itemsCount).map(p => (
					<ProjectsItem key={p.id} id={p.id} titleId={p.titleId} title={p.title} image={p.image}
						descriptionShort={p.descriptionShort} descriptionFull={p.descriptionFull}
						problem={p.problem} link={p.link} stack={p.stack} emoji={p.emoji} color={p.color} />
				))}
			</div>
		);
	} else {
		let p = getProjectByTitleId(titleId);

		return (
			<div className={cn(styles.projectsDiv, {
				[styles.controlsDiv]: type === 'controls',
			})}>
				<ProjectsItem key={p.id} id={p.id} titleId={p.titleId} title={p.title} image={p.image}
					descriptionShort={p.descriptionShort} descriptionFull={p.descriptionFull}
					problem={p.problem} link={p.link} stack={p.stack} emoji={p.emoji} color={p.color} />
				<ControlsBar itemsCount={itemsCount} setTitleId={setTitleId} />
			</div>
		);
	}
};
