import { LocaleChange } from '../LocaleChange/LocaleChange';
import styles from './Footer.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { format } from 'date-fns';
import { getContactsData } from '../../../helpers/get_contacts';


export const Footer = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerDiv}>
                <div className={styles.infoDiv}>
                    <Htag tag='s' className={styles.lang}>
                        {'©' + format(new Date(), 'yyyy') + ' ' + setLocale(router.locale).banana_codes +
                            '. ' + setLocale(router.locale).all_rights_reserved}
                    </Htag>
                    <Htag tag='xs' className={styles.lang}>
                        {setLocale(router.locale).legal_info}
                    </Htag>
                </div>
                <LocaleChange />
            </div>
        </footer>
    );
}
