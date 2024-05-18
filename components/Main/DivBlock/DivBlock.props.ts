import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface DivBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
}
