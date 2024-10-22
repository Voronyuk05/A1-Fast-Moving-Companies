import { ITipsTricksArticle } from '@/types/tipsTricks.types'
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import Image from 'next/image'
import Link from 'next/link';
import styles from './TipsTricksCard.module.scss'

export const TipsTricksCard = ({cardLogo, name, cardDescription}: ITipsTricksArticle) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                {cardLogo ? (
                        <Image src={cardLogo} alt={`${name} logo`} blurDataURL='/image-placeholder.jpg' placeholder='blur' width='190' height='190'/>
                    ) : (
                        <Image src='/image-placeholder.jpg' alt='placeholder picture' width='190' height='190'/> 
                )}
            </div>
            <div className={styles.card_body}>
                <Headings heading='h4' color='black' weight='700'>{name}</Headings>
                <hr />
                <div className={styles.text}>
                    <Paragraph color='black' weight='400'>{cardDescription}</Paragraph>
                    <Link href={`/tips-tricks/${name}`}>Reed More</Link>
                </div>
            </div>
        </div>
    )
}