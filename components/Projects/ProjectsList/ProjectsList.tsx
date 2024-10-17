import { ProjectsListProps } from './ProjectsList.props';
import styles from './ProjectsList.module.css';
import { ProjectsItem } from '../ProjectsItem/ProjectsItem';
import { ControlsBar } from '../../Controls/ControlsBar/ControlsBar';
import { useEffect, useState } from 'react';
import { getProjectByTitleId } from '../../../helpers/projects.helper';
import { useInView } from 'react-intersection-observer';
import { LoadingDots } from '../../Common/LoadingDots/LoadingDots';
import { ProjectInterface } from '../../../interfaces/project.interface';
import cn from 'classnames';


export const ProjectsList = ({ type, projects, itemsCount }: ProjectsListProps): JSX.Element => {
	const [titleId, setTitleId] = useState<string>('gemuani');

	const limit = 5;
	const [displayedProjects, setDisplayedProjects] = useState<ProjectInterface[]>(projects.slice(0, limit));
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && displayedProjects.length < projects.length) {
            const nextProjects = projects.slice(displayedProjects.length, displayedProjects.length + limit);
            setDisplayedProjects(prevProjects => [...prevProjects, ...nextProjects]);
        }
    }, [inView, projects, displayedProjects]);
	
	if (type === 'list') {
		return (
			<>
				<div className={styles.projectsDiv}>
					{displayedProjects.map((p, index) => (
						<ProjectsItem key={`${p.id}-${index}`} id={p.id} titleId={p.titleId} title={p.title} image={p.image}
							descriptionShort={p.descriptionShort} descriptionFull={p.descriptionFull}
							problem={p.problem} link={p.link} stack={p.stack} emoji={p.emoji} color={p.color} />
					))}
				</div>
				{
					projects.length !== displayedProjects.length ?
						<div ref={ref} className={styles.loadingIndicator}>
							<LoadingDots color='primary' />
						</div>
					: <></>
				}
			</>
		);
	} else {
		// let p = getProjectByTitleId(titleId);

		// return (
		// 	<div className={cn(styles.projectsDiv, {
		// 		[styles.controlsDiv]: type === 'controls',
		// 	})}>
		// 		<ProjectsItem key={p.id} id={p.id} titleId={p.titleId} title={p.title} image={p.image}
		// 			descriptionShort={p.descriptionShort} descriptionFull={p.descriptionFull}
		// 			problem={p.problem} link={p.link} stack={p.stack} emoji={p.emoji} color={p.color} />
		// 		<ControlsBar itemsCount={itemsCount} setTitleId={setTitleId} />
		// 	</div>
		// );
		return <></>
	}
};
