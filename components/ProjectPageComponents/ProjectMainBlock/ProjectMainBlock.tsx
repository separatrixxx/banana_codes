import { ProjectMainBlockProps } from './ProjectMainBlock.props';
import styles from './ProjectMainBlock.module.css';
import { useRouter } from 'next/router';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Htag/Htag';
import Link from 'next/link';


export const ProjectMainBlock = ({ title, descriptionShort, link }: ProjectMainBlockProps): JSX.Element => {
    const router = useRouter();

    return (
        <div className={styles.projectMainBlock}>
            <div className={styles.mainDiv}>
                <Htag tag='l' className={styles.back} onClick={() => router.push('/')}>
                    {setLocale(router.locale).back}
                </Htag>
                <div className={styles.textDiv}>
                    <Htag tag='xxl' className={styles.title}>
                        {'// ' + (router.locale === 'en' ? title.en : title.ru)}
                    </Htag>
                    <Htag tag='l' className={styles.description}>
                        {router.locale === 'en' ? descriptionShort.en : descriptionShort.ru}
                    </Htag>
                    {
                        link ?
                            <Link href={'https://' + link} target='_blank'>
                                <Htag tag='l' className={styles.link}>
                                    {link}
                                </Htag>
                            </Link>
                        :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
};