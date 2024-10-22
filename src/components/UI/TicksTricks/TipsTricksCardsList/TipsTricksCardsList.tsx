import { ITipsTricksArticle } from '@/types/tipsTricks.types'
import { TipsTricksCard } from '../TipsTricksCard/TipsTricksCard'
import styles from './TipsTricksCardsList.module.scss'

export const TipsTricksCardsList = ({data}: {data: ITipsTricksArticle[]}) => {
    return (
        <ul className={styles.ticks_tricks_cards_list}>
            {data.map(({id, cardLogo, name, cardDescription, publishedAt, info, comments}) => (
                <TipsTricksCard
                 key={id}
                id={id}
                cardLogo={cardLogo}
                name={name}
                cardDescription={cardDescription}
                publishedAt={publishedAt}
                info={info}
                comments={comments}/>
            ))}
        </ul>
    )
}