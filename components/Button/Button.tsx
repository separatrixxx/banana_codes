import { ButtonProps } from './Button.props';
import styles from './Button.module.css';


export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
	return (
        <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={onClick}>
                {text}
            </button>;
            <span className={styles.pad} />
        </div>
    );

}
