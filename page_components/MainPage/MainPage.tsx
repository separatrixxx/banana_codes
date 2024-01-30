import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { AboutBlock } from '../../components/AboutBlock/AboutBlock';
import { DropsBlock } from '../../components/DropsBlock/DropsBlock';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { TitleBlock } from '../../components/TitleBlock/TitleBlock';
import { setLocale } from '../../helpers/locale.helper';
import { Footer } from '../../components/Footer/Footer';
import { ContactsBlock } from '../../components/ContactsBlock/ContactsBlock';


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
                <DropsBlock isRotate={false} />
                <div className={styles.blocksDiv}>
                    <TitleBlock text={setLocale(router.locale).about} />
                    <AboutBlock />
                    <TitleBlock text={setLocale(router.locale).projects} />
                    <TitleBlock text={setLocale(router.locale).contacts} />
                    <ContactsBlock />
                </div>
                <DropsBlock isRotate={true} />
                <Footer />
            </div>
        </>
    );
};
