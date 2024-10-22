import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/free-mode'
import 'swiper/scss/thumbs'
import Image from 'next/image';
import styles from './CompanySwiper.module.scss'

export const CompanySwiper = ({images}: {images: string[]}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState()

    return ( 
            <>
                <Swiper       
                    modules={[Navigation, FreeMode, Thumbs, A11y]}
                    loop={true}
                    navigation={false}
                    thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    spaceBetween={10}
                    className={styles.main_swiper}
                    observer={true}
                    >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image loading="lazy" src={img} alt='banquet hall' width='500' height='500'/>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper       
                    onSwiper={setThumbsSwiper}
                    modules={[Navigation, Thumbs]}
                    loop={true}
                    freeMode={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    pagination={{ clickable: true}}
                    scrollbar={{ draggable: true }}
                    className={styles.thumbs}
                    >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} >
                            <Image className={styles.blured} src={img} alt='banquet hall' width='120' height='120'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
    )
}