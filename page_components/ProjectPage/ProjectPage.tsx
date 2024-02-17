import styles from './ProjectPage.module.css';
import { ProjectInterface } from '../../interfaces/project.interface';
import { DropsBlock } from '../../components/DropsBlock/DropsBlock';
import { Footer } from '../../components/Footer/Footer';
import { TitleBlock } from '../../components/TitleBlock/TitleBlock';
import { Htag } from '../../components/Htag/Htag';
import { useRouter } from 'next/router';


export const ProjectPage = ({ id, title, image, descriptionShort }: ProjectInterface): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.blocksDiv}>
                <TitleBlock text={title} />
                <Htag tag='l' className={styles.description}>
                    {router.locale === 'en' ? descriptionShort.en : descriptionShort.ru}
                </Htag>
            </div>
            <DropsBlock isRotate={true} />
            <Footer />
        </div>
    );
};
