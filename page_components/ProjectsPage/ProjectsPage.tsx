import styles from './ProjectsPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { DropsBlock } from '../../components/Common/DropsBlock/DropsBlock';
import { TitleBlock } from '../../components/Main/TitleBlock/TitleBlock';
import { setLocale } from '../../helpers/locale.helper';
import { Footer } from '../../components/Common/Footer/Footer';
import { ProjectsList } from '../../components/Projects/ProjectsList/ProjectsList';
import { DevelopmentBlock } from '../../components/Development/DevelopmentBlock/DevelopmentBlock';
import { Htag } from '../../components/Common/Htag/Htag';
import { DarkBlock } from '../../components/Common/DarkBlock/DarkBlock';
import { useSelector } from 'react-redux';
import { AppState } from '../../features/store/store';


export const ProjectsPage = (): JSX.Element => {
    const router = useRouter();

    const projects = useSelector((state: AppState) => state.projects.projects);
    
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
                <div className={styles.blocksDiv}>
                    <Htag tag='l' className={styles.back} onClick={() => router.push('/')}>
                        {setLocale(router.locale).back}
                    </Htag>
                    <TitleBlock color='dark' text={setLocale(router.locale).projects} />
                    <ProjectsList type='list' projects={projects} itemsCount={projects.length} />
                    <TitleBlock text={setLocale(router.locale).development} />
                    <DevelopmentBlock />
                </div>
                <DarkBlock />
                <Footer />
            </div>
        </>
    );
};
