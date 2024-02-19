import styles from './MainBlock.module.css';
import { useEffect, useState } from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import Arrow from './arrow.svg';
import { CrossBlock } from '../Cross/CrossBlock';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();

    const [element1, setElement1] = useState<Element | null>(null);
    const [element2, setElement2] = useState<Element | null>(null);
    const [element3, setElement3] = useState<Element | null>(null);
    const [element4, setElement4] = useState<Element | null>(null);

    useEffect(() => {
		setElement1(document.getElementById('about'));
        setElement2(document.getElementById('projects'));
        setElement3(document.getElementById('development'));
        setElement4(document.getElementById('contacts'));
	}, []);

    const scrollIntoView = require('scroll-into-view');

    return (
        <div className={styles.mainBlock}>
            <div className={styles.linksAndArrow}>
                <div className={styles.links}>
                    <Htag tag='xs' onClick={() => scrollIntoView(element1)}>
                        {setLocale(router.locale).about}
                    </Htag> 
                    <Htag tag='xs'onClick={() => scrollIntoView(element2)}>
                        {setLocale(router.locale).projects}
                    </Htag>
                    <Htag tag='xs' onClick={() => scrollIntoView(element3)}>
                        {setLocale(router.locale).development}
                    </Htag>
                    <Htag tag='xs' onClick={() => scrollIntoView(element4)}>
                        {setLocale(router.locale).contacts}
                    </Htag>
                </div>
                <span className={styles.arrow}>
                    <Arrow />
                </span>
            </div>
        </div>
    );
};