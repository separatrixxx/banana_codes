import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ControlsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string,
	titleId?: string,
	setTitleId?: (e: any) => void,
}
