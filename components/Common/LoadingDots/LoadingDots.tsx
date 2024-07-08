import { LoadingDotsProps } from './LoadingDots.props';
import styles from './LoadingDots.module.css';
import cn from 'classnames';


export const LoadingDots = ({ color }: LoadingDotsProps): JSX.Element => {
    return (
        <span className={cn(styles.loading, {
            [styles.loadingPrimary]: color === 'primary',
        })}>
            <span />
            <span />
            <span />
        </span>
    );
};