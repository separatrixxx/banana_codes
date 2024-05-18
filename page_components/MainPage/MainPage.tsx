import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { TitleBlock } from '../../components/Main/TitleBlock/TitleBlock';
import { setLocale } from '../../helpers/locale.helper';
import { Footer } from '../../components/Common/Footer/Footer';
import { ContactsBlock } from '../../components/Contacts/ContactsBlock/ContactsBlock';
import { useEffect, useState } from 'react';
import { getProjects } from '../../helpers/projects.helper';
import { ProjectInterface } from '../../interfaces/project.interface';
import { MainBlock } from '../../components/Main/MainBlock/MainBlock';
import { DivBlock } from '../../components/Main/DivBlock/DivBlock';
import { ProjectsSlider } from '../../components/Projects/ProjectsSlider/ProjectsSlider';
import { Htag } from '../../components/Common/Htag/Htag';
import { AboutBlock } from '../../components/Main/AboutBlock/AboutBlock';


export const MainPage = (): JSX.Element => {
    const router = useRouter();
    
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
                <MainBlock />
                <DivBlock>
                    <TitleBlock id='about' color='dark' text={setLocale(router.locale).about} />
                    <AboutBlock />
                    <Htag tag='m'>
                        {setLocale(router.locale).kommo_partners}
                    </Htag>
                </DivBlock>
                <DivBlock>
                    <TitleBlock id='projects' color='dark' text={setLocale(router.locale).projects} />
                    <ProjectsSlider itemsCount={5} />
                </DivBlock>
                <div className={styles.darkBlock}>
                    <DivBlock>
                        <TitleBlock id='contacts' text={setLocale(router.locale).contacts} />
                        <ContactsBlock />
                    </DivBlock>
                </div>
                <Footer />
            </div>
        </>
    );
};
