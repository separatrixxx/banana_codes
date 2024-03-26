import styles from './Disclaimer.module.css';
import { Htag } from '../Common/Htag/Htag';


export const Disclaimer = (): JSX.Element => {   
    return (
        <div className={styles.disclaimerBlock}>
            <Htag tag='s'>
                !!! under development !!!
            </Htag>
        </div>
    );
}
