import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BananaBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	colorType: 'one' | 'two',
}
