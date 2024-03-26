import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { LoadingDots } from '../LoadingDots/LoadingDots';
import cn from 'classnames';


export const Button = ({ text, loading, onClick }: ButtonProps): JSX.Element => {
    if (!loading) {
        return (
            <div className={styles.buttonDiv}>
                <button className={styles.button} onClick={onClick}>
                    {text}
                </button>;
                <span className={styles.pad} />
            </div>
        );
    } else {
        return (
            <div className={styles.buttonDiv}>
                <button className={cn(styles.button, styles.button_loading)} onClick={onClick}>
                    <LoadingDots />
                </button>;
                <span className={styles.pad} />
            </div>
        );
    }

}
