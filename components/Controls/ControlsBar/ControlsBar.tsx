import { ControlsBarProps } from './ControlsBar.props';
import styles from './ControlsBar.module.css';
import { ControlsItem } from '../ControlsItem/ControlsItem';
import Link from 'next/link';
import { animated, useSpringValue } from '@react-spring/web'
import { clamp } from '@react-spring/shared'
import { useCallback, useRef, useState } from 'react'
import { ControlsBarContext } from './ControlBarContext';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { getProjects } from '../../../helpers/projects.helper';


export const ZOOM_LIMIT = [-100, 50]

export const ControlsBar = ({ itemsCount, setTitleId }: ControlsBarProps): JSX.Element => {
    const [hovered, setHovered] = useState(false);
    const [width, setWidth] = useState(0);
    const isZooming = useRef(false);
    const dockRef = useRef<HTMLDivElement>(null!);

    const setIsZooming = useCallback((value: boolean) => {
        isZooming.current = value
        setHovered(!value)
    }, []);

    const zoomLevel = useSpringValue(1, {
        onChange: () => {
        setWidth(dockRef.current.clientWidth)
        },
    });

    useWindowResize(() => {
        setWidth(dockRef.current.clientWidth)
    });

	return (
        <ControlsBarContext.Provider value={{ hovered, setIsZooming, width, zoomLevel }}>
            <animated.div className={styles.controlsBar}
                ref={dockRef}
                onMouseOver={() => {
                    if (!isZooming.current) {
                        setHovered(true)
                    }
                }}
                onMouseOut={() => {
                    setHovered(false)
                }}
                style={{
                    gridTemplateColumns: `repeat(${itemsCount + 1}, auto)`,
                    x: '-50%',
                    scale: zoomLevel
                    .to({
                        range: [ZOOM_LIMIT[0], 1, ZOOM_LIMIT[1]],
                        output: [2, 1, 0.5],
                    }
                    ).to(value => clamp(0.5, 2, value))

                }}>
                {getProjects().slice(0, itemsCount).map(p => (
                    <ControlsItem key={p.emoji} text={p.emoji} titleId={p.titleId} setTitleId={setTitleId} />
                ))}
                <Link href='/projects'>
                    <ControlsItem text='>' />
                </Link>
            </animated.div>
        </ControlsBarContext.Provider>
    );
};
