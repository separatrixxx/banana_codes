import { ControlsItemProps } from './ControlsItem.props';
import styles from './ControlsItem.module.css';
import { animated, useIsomorphicLayoutEffect, useSpringValue } from '@react-spring/web'
import { useRef, useState } from 'react'
import { useControlsBar } from '../ControlsBar/ControlBarContext';
import { useMousePosition } from '../../../hooks/useMousePosition';
import { useWindowResize } from '../../../hooks/useWindowResize';


export const ControlsItem = ({ text, titleId, setTitleId }: ControlsItemProps): JSX.Element => {
    const cardRef = useRef<HTMLButtonElement>(null!);
    const [elCenterX, setElCenterX] = useState<number>(0);
    const [initialWidth, setInitialWidth] = useState<number>(48);

    const size = useSpringValue(initialWidth, {
        config: {
        mass: 0.1,
        tension: 320,
        },
    });

    const y = useSpringValue(0, {
        config: {
            friction: 29,
            tension: 238,
        },
    });

    const dock = useControlsBar();

    useMousePosition(
        {
        onChange: ({ value }) => {
            const mouseX = value.x

            if (dock.width > 0) {
                const transformedValue =
                    initialWidth + 36 * Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) ** 12;

                if (dock.hovered) {
                    size.start(transformedValue);
                }
            }
        },
        },
        [elCenterX, dock]
    );

    useIsomorphicLayoutEffect(() => {
        if (!dock.hovered) {
            size.start(initialWidth);
        }
    }, [dock.hovered]);

    useWindowResize(() => {
        const { x } = cardRef.current.getBoundingClientRect();

        setElCenterX(x + initialWidth / 2);
    });

	return (
        <animated.button className={styles.controlsItem}
            ref={cardRef}
            style={{
                width: size,
                height: size,
                y,
            }}
            onMouseOver={() => {
                if (titleId && setTitleId) {
                    setTitleId(titleId);
                }
            }}
        >
            {text}
        </animated.button>
    );
};
