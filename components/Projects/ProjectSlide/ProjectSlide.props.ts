import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProjectInterface } from '../../../interfaces/project.interface';


export interface ProjectSlideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	project: ProjectInterface,
}
