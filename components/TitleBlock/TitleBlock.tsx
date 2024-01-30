import { TitleBlockProps } from './TitleBlock.props';
import styles from './TitleBlock.module.css';
import { Htag } from '../Htag/Htag';


export const TitleBlock = ({ text }: TitleBlockProps): JSX.Element => {
    return (
        <Htag tag='xxl' className={styles.title}>
            {'// ' + text}
        </Htag>
    );
}
