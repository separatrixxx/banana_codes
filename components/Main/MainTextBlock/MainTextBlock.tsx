import styles from './MainTextBlock.module.css';


export const MainTextBlock = (): JSX.Element => {
    return (
        <div className={styles.mainTextBlock}>
            <h1 className={styles.bananaText}>
                BANANA
            </h1>
            <h1 className={styles.codesText}>
                CODES
            </h1>
        </div>
    );
};