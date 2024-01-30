import styles from './ContactsForm.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../helpers/locale.helper';
import { Input } from '../Input/Input';
import { useState } from 'react';
import { Button } from '../Button/Button';


export const ContactsForm = (): JSX.Element => {
    const router = useRouter();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPhone, setErrorPhone] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    
    return (
        <div className={styles.contactsForm}>
            <Input type='name' text={'// ' + setLocale(router.locale).name} value={name}
                error={errorName} onChange={(e) => setName(e.target.value)} />
            <Input type='email' text={'// ' + setLocale(router.locale).email} value={email}
                error={errorEmail} onChange={(e) => setEmail(e.target.value)} />
            <Input type='phone' text={'// ' + setLocale(router.locale).phone} value={phone}
                error={errorPhone} onChange={(e) => setPhone(e.target.value)} />
            <Input type='message' text={'// ' + setLocale(router.locale).message} value={message}
                error={errorMessage} onChange={(e) => setMessage(e.target.value)} />
            <Button text={setLocale(router.locale).send} onClick={() => alert(name)} />
        </div>
    );
}
