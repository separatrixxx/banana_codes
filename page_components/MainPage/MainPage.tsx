import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';
import { DropsBlock } from '../../components/DropsBlock/DropsBlock';
import { MainBlock } from '../../components/MainPageComponents/MainBlock/MainBlock';
import { TitleBlock } from '../../components/TitleBlock/TitleBlock';
import { setLocale } from '../../helpers/locale.helper';
import { Footer } from '../../components/Footer/Footer';
import { ContactsBlock } from '../../components/ContactsBlock/ContactsBlock';
import { ProjectsList } from '../../components/ProjectsComponents/ProjectsList/ProjectsList';
import { useEffect, useState } from 'react';
import { getProjects } from '../../helpers/projects.helper';
import { ProjectInterface } from '../../interfaces/project.interface';
import { Htag } from '../../components/Htag/Htag';
import { DevelopmentBlock } from '../../components/DevelopmentBlock/DevelopmentBlock';
import { Disclaimer } from '../../components/1Disclaimer/Disclaimer';


export const MainPage = (): JSX.Element => {
    const router = useRouter();

    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    useEffect(() => {
        setProjects(getProjects());
	}, []);
    
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <Disclaimer />
                <MainBlock />
                <DropsBlock isRotate={false} />
                <div className={styles.blocksDiv}>
                    <TitleBlock id='about' text={setLocale(router.locale).about} />
                    <AboutBlock />
                    <Htag tag='m' className={styles.kommoPartners}>
                        {setLocale(router.locale).kommo_partners}
                    </Htag>
                    <TitleBlock id='projects' text={setLocale(router.locale).projects} />
                    <ProjectsList projects={projects} itemsCount={3} />
                    <Htag tag='s' className={styles.moreProjects} onClick={() => router.push('/projects')}>
                        {setLocale(router.locale).more_projects}
                    </Htag>
                    <TitleBlock id='contacts' text={setLocale(router.locale).contacts} />
                    <ContactsBlock />
                </div>
                <DropsBlock isRotate={true} />
                <Footer />
            </div>
        </>
    );
};
