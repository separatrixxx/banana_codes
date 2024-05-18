import { TitleBlockProps } from './TitleBlock.props';
import styles from './TitleBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const TitleBlock = ({ id, color, text }: TitleBlockProps): JSX.Element => {
    return (
        <Htag id={id} tag='xxl' className={cn(styles.title, {
            [styles.lightTitle]: color === 'light',
            [styles.darkTitle]: color === 'dark',
            [styles.primaryTitle]: color === 'primary',
        })}>
            {'// ' + text}
        </Htag>
    );
}
