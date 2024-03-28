import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { DropsBlock } from '../../components/Common/DropsBlock/DropsBlock';
import { TitleBlock } from '../../components/Main/TitleBlock/TitleBlock';
import { setLocale } from '../../helpers/locale.helper';
import { Footer } from '../../components/Common/Footer/Footer';
import { ContactsBlock } from '../../components/Contacts/ContactsBlock/ContactsBlock';
import { ProjectsList } from '../../components/Projects/ProjectsList/ProjectsList';
import { useEffect, useState } from 'react';
import { getProjects } from '../../helpers/projects.helper';
import { ProjectInterface } from '../../interfaces/project.interface';
import { Htag } from '../../components/Common/Htag/Htag';
import { Disclaimer } from '../../components/1Disclaimer/Disclaimer';
import { MainBlock } from '../../components/Main/MainBlock/MainBlock';
import { AboutBlock } from '../../components/Main/AboutBlock/AboutBlock';
import Link from 'next/link';


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
                    <Link href='/projects'>
                        <Htag tag='s' className={styles.moreProjects}>
                            {setLocale(router.locale).more_projects}
                        </Htag>
                    </Link>
                    <TitleBlock id='contacts' text={setLocale(router.locale).contacts} />
                    <ContactsBlock />
                </div>
                <DropsBlock isRotate={true} />
                <Footer />
            </div>
        </>
    );
};
