import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProjectInterface } from '../../../interfaces/project.interface';


export interface ProjectsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	projects: ProjectInterface[],
}
