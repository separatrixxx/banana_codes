import styles from './Disclaimer.module.css';
import { Htag } from '../Htag/Htag';


export const Disclaimer = (): JSX.Element => {   
    return (
        <div className={styles.disclaimerBlock}>
            <Htag tag='s'>
                !!! under development !!!
            </Htag>
        </div>
    );
}
