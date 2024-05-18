import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProjectInterface } from '../../../interfaces/project.interface';


export interface ProjectsSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	itemsCount: number,
}
