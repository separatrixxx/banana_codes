import styles from './ProjectPage.module.css';
import { ProjectInterface } from '../../interfaces/project.interface';
import { DropsBlock } from '../../components/Common/DropsBlock/DropsBlock';
import { Footer } from '../../components/Common/Footer/Footer';
import { TitleBlock } from '../../components/Main/TitleBlock/TitleBlock';
import { Htag } from '../../components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { ProjectBlock } from '../../components/Projects/ProjectBlock/ProjectMainBlock';
import { setLocale } from '../../helpers/locale.helper';
import Link from 'next/link';


export const ProjectPage = ({ id, title, image, descriptionShort, descriptionFull, problem, link, stack, notALink }:
    ProjectInterface): JSX.Element => {
    const router = useRouter();
    
    return (
        <div className={styles.wrapper}>
            <ProjectBlock title={title} descriptionShort={descriptionShort} link={link} />
            {
                !notALink ?
                    <>
                        <DropsBlock isRotate={false} />
                        <div className={styles.blocksDiv}>
                            <TitleBlock text={setLocale(router.locale).about_client} />
                            <Htag tag='l' className={styles.description}>
                                {router.locale === 'en' ? descriptionFull.en : descriptionFull.ru}
                            </Htag>
                            <TitleBlock text={setLocale(router.locale).problem} />
                            <Htag tag='l' className={styles.description}>
                                {router.locale === 'en' ? problem.en : problem.ru}
                            </Htag>
                            <TitleBlock text={setLocale(router.locale).result} />
                            <Htag tag='l' className={styles.description}>
                                {setLocale(router.locale).result_text}
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
                            {
                                image ? 
                                    <>
                                        <Htag tag='l' className={styles.description}>
                                            {setLocale(router.locale).but_here_is_demo}
                                        </Htag>
                                        <video autoPlay={true} loop muted className={styles.video}>
                                            <source src={image} type="video/mp4" />
                                        </video>
                                    </>
                                :
                                    <></>
                            }
                            <TitleBlock text={setLocale(router.locale).stack} />
                            <Htag tag='l' className={styles.description}>
                                {stack}
                            </Htag>
                        </div>
                        <DropsBlock isRotate={true} />
                    </>
                :
                            <></>
            }
            <Footer />
        </div>
    );
};
