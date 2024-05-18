import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SliderNavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	itemsCount: number,
}
