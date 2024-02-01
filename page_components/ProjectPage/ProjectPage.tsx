import styles from './ProjectPage.module.css';
import { ProjectInterface } from '../../interfaces/project.interface';


export const ProjectPage = ({ id, title, image }: ProjectInterface): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            {title}
        </div>
    );
};
