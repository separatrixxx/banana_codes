import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DropsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	isRotate: boolean,
}
