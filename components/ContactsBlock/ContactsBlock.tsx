import styles from './ContactsBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { ContactsForm } from '../ContactsForm/ContactsForm';


export const ContactsBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.contactsBlock}>
            <Htag tag='m' onClick={() => router.push('tel:+88005553535')}>
                88005553535
            </Htag>
            <Htag tag='m' onClick={() => router.push('mailto:banana@codes.com')}>
                banana@codes.com
            </Htag>
            <Htag tag='m' className={styles.or}>
                {setLocale(router.locale).or + '...'}
            </Htag>
            <ContactsForm />
        </div>
    );
}
