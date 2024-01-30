import styles from './AboutBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';


export const AboutBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.aboutBlock}>
            <Htag tag='m'>
                <span>{setLocale(router.locale).banana_codes}</span>
                {setLocale(router.locale).about_text}
            </Htag>
        </div>
    );
}
