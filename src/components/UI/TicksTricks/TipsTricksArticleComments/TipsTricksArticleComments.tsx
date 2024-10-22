import { ITipsTricksComment } from '@/types/tipsTricks.types'
import styles from './TipsTricksArticleComments.module.scss'
import { TipsTricksComment } from '../TipsTricksComment/TipsTricksComment';
import { Headings } from '../../Headings/Headings';

export const TipsTricksArticleComments = ({commentsData, articleId, refetch}: {commentsData: ITipsTricksComment[], articleId: number, refetch?: () => void }) => {
    return (
        <section className={styles.article_comments}>
            <div className={styles.container}>
                {commentsData.length ? (
                    <>
                        <div className={styles.title}>
                            <Headings heading='h3' color='black' weight='900' >Comments</Headings>
                        </div>
                        <div className={styles.comments}>
                            {commentsData.map((commentData) => (
                                <TipsTricksComment
                                key={commentData.id}
                                commentData={commentData}                        
                                articleId={articleId}
                                refetch={refetch}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.not_found_comments}>
                        <Headings heading='h3' color='black' weight='700'>No Comments</Headings>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TipsTricksArticleComments