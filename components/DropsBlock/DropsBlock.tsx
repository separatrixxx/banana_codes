import { DropsBlockProps } from './DropsBlock.props';
import styles from './DropsBlock.module.css';
import Drops  from './drops.svg';
import cn from 'classnames';


export const DropsBlock = ({ isRotate }: DropsBlockProps): JSX.Element => {
    return (
        <span className={cn(styles.drops, {
            [styles.rotate]: isRotate,
        })}>
            <Drops />
        </span>
    );
}