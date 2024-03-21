import { CrossBlockProps } from './CrossBlock.props';
import styles from './CrossBlock.module.css';
import Cross  from './cross.svg';
import cn from 'classnames';


export const CrossBlock = ({ colorType }: CrossBlockProps): JSX.Element => {
    return (
        <div className={styles.crossBlock}>
            <span className={cn(styles.cross1, {
                [styles.colorTwo1]: colorType === 'two',
            })}>
                <Cross />
            </span>
            <span className={cn(styles.cross2, {
                [styles.colorTwo2]: colorType === 'two',
            })}>
                <Cross />
            </span>
        </div>
    );
}
