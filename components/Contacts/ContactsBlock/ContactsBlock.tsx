import styles from './ContactsBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { ContactsForm } from '../ContactsForm/ContactsForm';


export const ContactsBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.contactsBlock}>
            <Htag tag='m' className={styles.located}>
                {setLocale(router.locale).located}
            </Htag>
            <Htag tag='m' onClick={() => router.push('tel:+79203290807')}>
                79203290807
            </Htag>
            <Htag tag='m' onClick={() => router.push('mailto:banana.info@banana.codes')}>
                banana.info@banana.codes
            </Htag>
            <Htag tag='m' className={styles.or}>
                {setLocale(router.locale).or + '...'}
            </Htag>
            <ContactsForm />
        </div>
    );
}
