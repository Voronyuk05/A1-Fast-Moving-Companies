import { SwiperSlide } from 'swiper/react';
import { SwiperSection } from '../../SwiperSection/SwiperSection';
import { ReplyCard } from '../ReplyCard/ReplyCard';
import { IReply } from '@/types/replies.types';

export const RepliesSwiper = ({data}: {data: IReply[]}) => {
    
    return (
        <SwiperSection slidesPerView={3} title='Latest Replies'>
            {data.map(({ name, comment, company, rating, publishedAt}, index) => (
                <SwiperSlide key={index}>
                    <ReplyCard 
                        name={name}
                        comment={comment}
                        company={company}
                        rating={rating}
                        publishedAt={publishedAt}/>
                </SwiperSlide>
            ))}
        </SwiperSection>
    )
}