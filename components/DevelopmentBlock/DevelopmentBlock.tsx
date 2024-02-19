import styles from './DevelopmentBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import Link from 'next/link';


export const DevelopmentBlock = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.developmentBlock}>
            <Htag tag='m'>
                {setLocale(router.locale).development_text}
            </Htag>
            <Htag tag='m'>
                {setLocale(router.locale).development1}
                <span>{' (' + setLocale(router.locale).in_development + ')'}</span>
            </Htag>
            <Link href={'https://tbench.vercel.app/'} target='_blank'>
                <Htag tag='m' className={styles.link}>
                    {setLocale(router.locale).development2}
                    <span>{' (' + setLocale(router.locale).in_development + ')'}</span>
                </Htag>
            </Link>
            <Link href={'https://easy-voyage.vercel.app/'} target='_blank'>
                <Htag tag='m' className={styles.link}>
                    {setLocale(router.locale).development3}
                    <span>{' (' + setLocale(router.locale).in_development + ')'}</span>
                </Htag>
            </Link>
        </div>
    );
}
