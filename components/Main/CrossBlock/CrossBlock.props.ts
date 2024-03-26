import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CrossBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	colorType: 'one' | 'two',
}
