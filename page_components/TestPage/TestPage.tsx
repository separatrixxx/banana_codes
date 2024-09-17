import styles from './TestPage.module.css';
import { TestComponent } from '../../components/TestComponent/TestComponent';


export const TestPage = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <TestComponent />
        </div>
    );
};
