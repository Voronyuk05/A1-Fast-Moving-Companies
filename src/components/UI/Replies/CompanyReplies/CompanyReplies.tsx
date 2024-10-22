import { useRouter } from 'next/navigation';
import { IReply } from '@/types/replies.types';
import { ReplyCard } from '../../Replies/ReplyCard/ReplyCard';
import { Stars } from '../../Stars/Stars';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Headings } from '../../Headings/Headings';
import { Pagination } from 'swiper/modules';
import styles from './CompanyReplies.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const CompanyReplies = ({data, rating}: {data: IReply[], rating: number}) => {
    const {push} = useRouter()

    return (
        <section className={styles.replies_swiper_section}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.info}>
                        <Headings heading='h3' weight='700' color='black'>{`${data.length} Reviews`}</Headings>
                        <Headings heading='h5' weight='700' color='black'><Stars rating={rating}/></Headings>
                    </div>
                    <PrimaryButton onClick={() => push(`/location/${data[0].company}/add-reply`)}>Add Reply</PrimaryButton>
                </div>
                <Swiper
                className={styles.slider}
                role='slider'
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                spaceBetween={25}
                slidesPerView={3}>
                    {data.map(({id, name, comment, company, rating, publishedAt}, index) => (
                        <SwiperSlide key={index}>
                            <ReplyCard 
                            id={id}
                            name={name}
                            comment={comment}
                            company={company}
                            rating={rating}
                            publishedAt={publishedAt}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default CompanyReplies