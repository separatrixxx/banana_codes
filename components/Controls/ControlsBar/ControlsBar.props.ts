import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ControlsBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	itemsCount: number,
	setTitleId: (e: any) => void,
}
