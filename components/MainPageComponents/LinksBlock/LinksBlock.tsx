import styles from './LinksBlock.module.css';
import { useEffect, useState } from 'react';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Htag/Htag';
import { useRouter } from 'next/router';
import Arrow from './arrow.svg';


export const LinksBlock = (): JSX.Element => {
    const router = useRouter();

    const [element1, setElement1] = useState<Element | null>(null);
    const [element2, setElement2] = useState<Element | null>(null);
    const [element3, setElement3] = useState<Element | null>(null);

    useEffect(() => {
		setElement1(document.getElementById('about'));
        setElement2(document.getElementById('projects'));
        setElement3(document.getElementById('contacts'));
	}, []);

    const scrollIntoView = require('scroll-into-view');

    return (
        <div className={styles.linksAndArrow}>
            <div className={styles.links}>
                <Htag tag='xs' onClick={() => scrollIntoView(element1)}>
                    {setLocale(router.locale).about}
                </Htag>
                <Htag tag='xs'onClick={() => scrollIntoView(element2)}>
                    {setLocale(router.locale).projects}
                </Htag>
                <Htag tag='xs' onClick={() => scrollIntoView(element3)}>
                    {setLocale(router.locale).contacts}
                </Htag>
            </div>
            <span className={styles.arrow}>
                <Arrow />
            </span>
        </div>
    );
};