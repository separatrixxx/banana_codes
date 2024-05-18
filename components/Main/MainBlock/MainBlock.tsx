import styles from './MainBlock.module.css';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import { useRouter } from 'next/router';
import { MainTextBlock } from '../MainTextBlock/MainTextBlock';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.mainBlock}>
            <LinksBlock />
            <MainTextBlock />
        </div>
    );
};