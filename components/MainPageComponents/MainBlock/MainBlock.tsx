import { useResizeH } from '../../../hooks/useResize';
import { Banana3D } from '../Banana3D/Banana3D';
import { BananaBlock } from '../BananaBlock/BananaBlock';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import styles from './MainBlock.module.css';
import { useRouter } from 'next/router';


export const MainBlock = (): JSX.Element => {
    const router = useRouter();

    const height = useResizeH();

    return (
        <div className={styles.mainBlock}>
            {/* <h1 className={styles.textBanana} style={{
                fontSize: height / 4.178,
            }}>
                BANANA
            </h1> */}
            {/* <h1 className={styles.textCodes}>
                CODES
            </h1> */}
            <LinksBlock />
            <BananaBlock colorType='one' />
            {/* <Banana3D /> */}
        </div>
    );
};