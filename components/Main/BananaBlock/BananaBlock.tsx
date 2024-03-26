import { BananaBlockProps } from './BananaBlock.props';
import styles from './BananaBlock.module.css';
import { CrossBlock } from '../CrossBlock/CrossBlock';
import { Banana3D } from '../Banana3D/Banana3D';


export const BananaBlock = ({ colorType }: BananaBlockProps): JSX.Element => {
    return (
        <div className={styles.bananaBlock}>
            <CrossBlock colorType={colorType} />
            {/* <Banana3D /> */}
        </div>
    );
}
