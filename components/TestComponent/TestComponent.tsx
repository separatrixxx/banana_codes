import styles from './TestComponent.module.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Test from './test.svg';


export const TestComponent = () => {
    const text = "СЛУЖЕНИЕ БОЛЬШЕ ЧЕМ МОДНЫЙ ТРЕНД";
    const animationSpeed = 10;

    useEffect(() => {
        const textElement = document.getElementById('text') as HTMLElement;

        if (textElement) {
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.innerHTML = text[i];
                textElement.appendChild(span);
                span.style.transform = `rotate(${11 * i}deg)`;
            }

            gsap.to(textElement, {
                rotation: -360,
                duration: animationSpeed,
                ease: 'linear',
                repeat: -1
            });
        }
    }, [text, animationSpeed]);

    return (
        <div className={styles.testComponent}>
            <Test className={styles.testIcon} />
            <p id="text" className={styles.circularText}></p>
        </div>
    );
};
