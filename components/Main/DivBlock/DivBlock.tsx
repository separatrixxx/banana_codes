import { DivBlockProps } from './DivBlock.props';
import styles from './DivBlock.module.css';


export const DivBlock = ({ children }: DivBlockProps): JSX.Element => {
    return (
        <div className={styles.blocksDiv}>
            {children}
        </div>
    );
};