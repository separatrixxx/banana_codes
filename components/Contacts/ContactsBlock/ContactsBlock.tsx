import styles from './ContactsBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsData } from '../../../interfaces/contacts.interface';
import { getContactsData } from '../../../helpers/get_contacts';


export const ContactsBlock = (): JSX.Element => {
    const router = useRouter();

    const contactsData: ContactsData = getContactsData();
    
    return (
        <div className={styles.contactsBlock}>
            <Htag tag='m' onClick={() => router.push(`tel:${contactsData.phone}`)}>
                {contactsData.phone}
            </Htag>
            <Htag tag='m' onClick={() => router.push(`https://t.me/${contactsData.tg}`)}>
                {`tg: ${contactsData.tg}`}
            </Htag>
            <Htag tag='m' onClick={() => router.push(`mailto:${contactsData.email}`)}>
                {contactsData.email}
            </Htag>
            <Htag tag='m' className={styles.or}>
                {setLocale(router.locale).or + '...'}
            </Htag>
            <ContactsForm />
        </div>
    );
}
