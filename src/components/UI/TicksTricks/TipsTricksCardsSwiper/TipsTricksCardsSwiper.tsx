import { SwiperSlide } from 'swiper/react';
import { SwiperSection } from '../../SwiperSection/SwiperSection';
import { TipsTricksCard } from '../TipsTricksCard/TipsTricksCard';
import { useGetTipsTricksArticles } from '@/hooks/useGetTipsTricksArticles';

export const TipsTricksCardsSwiper = () => {
    const {data: articlesData} = useGetTipsTricksArticles()
    
    if (articlesData)
    return (
        <SwiperSection slidesPerView={2} title='Moving Tips & Tricks'>
            {articlesData.map(({id, name, cardLogo, cardDescription, publishedAt, info, comments}, index) => (
                <SwiperSlide key={index}>
                    <TipsTricksCard 
                        key={id}
                        id={id}
                        cardLogo={cardLogo}
                        name={name}
                        cardDescription={cardDescription}
                        publishedAt={publishedAt}
                        info={info}
                        comments={comments}/>
                </SwiperSlide>
            ))}
        </SwiperSection>
    )
}

export default TipsTricksCardsSwiper