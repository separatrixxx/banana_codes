import { TitleBlockProps } from './TitleBlock.props';
import styles from './TitleBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';


export const TitleBlock = ({ id, text }: TitleBlockProps): JSX.Element => {
    return (
        <Htag id={id} tag='xxl' className={styles.title}>
            {'// ' + text}
        </Htag>
    );
}
