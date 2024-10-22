import { useInView } from 'react-intersection-observer';
import { IReply } from '@/types/replies.types'
import { Stars } from '../../Stars/Stars';
import { Paragraph } from '../../Paragraph/Paragraph';
import { ImQuotesLeft } from "react-icons/im";
import { Headings } from '../../Headings/Headings';
import Image from 'next/image';
import styles from './ReplyCard.module.scss'
import Link from 'next/link';

export const ReplyCard = ({name, comment, company, rating, publishedAt}: IReply) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    

    return (
        <div ref={ref} className={`${inView ? styles.showed : ''} ${styles.reply_card} `}>
            <div className={styles.card_top}>
                <Image src='/user.png' alt='user photo' width='100' height='100'/> 
                <div className={styles.title}>
                    <Headings heading='h4' weight='700' color='black'>{name}</Headings>
                    <Link href={`/location/${company}`}>{company}</Link>
                    <Headings heading='h5' weight='700' color='black'><Stars rating={rating}/></Headings>
                </div>
            </div>
            <hr />
            <div className={styles.card_bottom}>
                <div className={styles.comment}>
                    <ImQuotesLeft/>
                    <Paragraph weight='500' color='black'>{`${comment}`}</Paragraph>
                </div>
                <Headings heading='h5' weight='300' color='black'>{String(publishedAt)}</Headings>
            </div>
        </div>
    )
}