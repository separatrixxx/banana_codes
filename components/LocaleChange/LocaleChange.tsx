import styles from './LocaleChange.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { en } from '../../locales/en.locale';
import { ru } from '../../locales/ru.locale';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { Modal } from '../Modal/Modal';


export const LocaleChange = (): JSX.Element => {
    const router = useRouter();

    return (
        <Link href={router.asPath} locale={router.locale === 'en' ? 'ru' : 'en'}>
            <Htag tag='s' className={styles.lang}>
                {setLocale(router.locale).language}
            </Htag>
        </Link>
    );
};