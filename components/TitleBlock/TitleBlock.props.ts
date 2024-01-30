import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TitleBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	text: string,
}
