import styles from './MainBlock.module.css';
import { useRouter } from 'next/router';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.mainBlock}>
            <h1 className={styles.banana}>
                BANANA
            </h1>
        </div>
    );
};