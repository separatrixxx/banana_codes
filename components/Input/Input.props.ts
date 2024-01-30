import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'name' | 'email' | 'message' | 'phone',
	text: string,
	value: string,
	error: boolean,
	onChange: (e: any) => void,
}