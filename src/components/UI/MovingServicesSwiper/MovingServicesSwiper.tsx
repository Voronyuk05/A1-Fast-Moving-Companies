import { useRouter } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';
import { Headings } from '../Headings/Headings';
import { dataMovingServicesSlides } from '../../../data/dataMovingServicesSwiper';
import { SwiperSection } from '../SwiperSection/SwiperSection';
import styles from './MovingServicesSwiper.module.scss'

export const MovingServicesSwiper = () => {
    const {push} = useRouter()

    return (
        <SwiperSection slidesPerView={4} title='Moving Services'>
            {dataMovingServicesSlides.map(({label, img}, index) => (
                <SwiperSlide className={styles.slide} key={index}>
                    <div className={styles.service_slide} onClick={() => push(`/location?services=${label}`)}>
                        <img src={img} alt={`image of ${label}`}/>
                        <Headings heading='h4' color='black' weight='700'>{label}</Headings>
                    </div>
                </SwiperSlide>
            ))}
        </SwiperSection>
    )
}

export default MovingServicesSwiper