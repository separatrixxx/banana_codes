import { ProjectsSliderProps } from './ProjectsSlider.props';
import styles from './ProjectsSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ProjectSlide } from '../ProjectSlide/ProjectSlide';
import { SliderNavigation } from '../Slider/SliderNavigation/SliderNavigation'
import { useSelector } from 'react-redux';
import { AppState } from '../../../features/store/store';


export const ProjectsSlider = ({ itemsCount }: ProjectsSliderProps): JSX.Element => {
    const projects = useSelector((state: AppState) => state.projects.projects);

    return (
        <Swiper className={styles.projectsSlider}
            modules={[A11y, Autoplay]}
            slidesPerView={1}
            loop={false}
            spaceBetween={10}
            speed={1000}
        >
            {
                projects.slice(0, itemsCount).map(project => (
                    <SwiperSlide key={project.id}>
                        <ProjectSlide project={project} />
                    </SwiperSlide>
                ))
            }
            <SliderNavigation itemsCount={itemsCount} />
        </Swiper>
    );
};

