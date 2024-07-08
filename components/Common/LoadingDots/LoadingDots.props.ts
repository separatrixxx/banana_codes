import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface LoadingDotsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'white' | 'primary',
}
