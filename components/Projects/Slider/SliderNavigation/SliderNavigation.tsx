import { SliderNavigationProps } from './SliderNavigation.props';
import styles from './SliderNavigation.module.css';
import { useSwiper } from 'swiper/react';
import { useState } from 'react';
import cn from 'classnames';


export const SliderNavigation = ({ itemsCount }: SliderNavigationProps): JSX.Element => {
    const swiper = useSwiper();

    const [counter, setCounter] = useState<number>(0);

    return (
        <div className={styles.sliderNavigationDiv}>
            <span className={cn(styles.buttonPrev, {
                [styles.disable]: counter === 0,
            })}
                onClick={() => {
                    if (counter > 0) {
                        swiper.slidePrev();
                        setCounter(counter - 1);
                    }
                }}>
                {"<"}
            </span>
            <span className={cn(styles.buttonNext, {
                [styles.disable]: counter === itemsCount - 1,
            })}
                onClick={() => {
                    if (counter < itemsCount - 1) {
                        swiper.slideNext();
                        setCounter(counter + 1);
                    }
                }}>
                {">"}
            </span>
        </div>
    );
};

