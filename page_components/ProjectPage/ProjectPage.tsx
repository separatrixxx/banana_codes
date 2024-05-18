import { ProjectPageProps } from './ProjectPage.props';
import styles from './ProjectPage.module.css';
import { Footer } from '../../components/Common/Footer/Footer';
import { TitleBlock } from '../../components/Main/TitleBlock/TitleBlock';
import { Htag } from '../../components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { ProjectBlock } from '../../components/Projects/ProjectBlock/ProjectMainBlock';
import { setLocale } from '../../helpers/locale.helper';
import Link from 'next/link';
import { DarkBlock } from '../../components/Common/DarkBlock/DarkBlock';
import { useSelector } from 'react-redux';
import { AppState } from '../../features/store/store';


export const ProjectPage = ({ id }: ProjectPageProps): JSX.Element => {
    const router = useRouter();

    const project = useSelector((state: AppState) => state.projects.projects)[id];
    
    if (project) {
        return (
            <div className={styles.wrapper}>
                <ProjectBlock title={project.title} descriptionShort={project.descriptionShort} link={project.link} />
                {
                    !project.notALink ?
                        <>
                            <div className={styles.blocksDiv}>
                                <TitleBlock color='dark' text={setLocale(router.locale).about_client} />
                                <Htag tag='l' className={styles.description}>
                                    {router.locale === 'en' ? project.descriptionFull.en : project.descriptionFull.ru}
                                </Htag>
                                <TitleBlock color='dark' text={setLocale(router.locale).problem} />
                                <Htag tag='l' className={styles.description}>
                                    {router.locale === 'en' ? project.problem.en : project.problem.ru}
                                </Htag>
                                <TitleBlock color='dark' text={setLocale(router.locale).result} />
                                <Htag tag='l' className={styles.description}>
                                    {setLocale(router.locale).result_text}
                                </Htag>
                                {
                                    project.link ? 
                                        <Link href={'https://' + project.link} target='_blank'>
                                            <Htag tag='l' className={styles.link}>
                                                {project.link}
                                            </Htag>
                                        </Link>
                                    :
                                        <></>
                                }
                                {
                                    project.image ? 
                                        <>
                                            <Htag tag='l' className={styles.description}>
                                                {setLocale(router.locale).but_here_is_demo}
                                            </Htag>
                                            <video autoPlay={true} loop muted className={styles.video}>
                                                <source src={project.image} type="video/mp4" />
                                            </video>
                                        </>
                                    :
                                        <></>
                                }
                                <TitleBlock color='dark' text={setLocale(router.locale).stack} />
                                <Htag tag='l' className={styles.description}>
                                    {project.stack}
                                </Htag>
                            </div>
                            <DarkBlock />
                        </>
                    :
                                <></>
                }
                <Footer />
            </div>
        );
    } else {
        return <></>
    }
};
