import { ITipsTricksArticle } from "@/types/tipsTricks.types"
import { TipsTricksCommentForm } from "../TipsTricksCommentForm/TipsTricksCommentForm"
import styles from './TipsTricksArticleCommentForm.module.scss'
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';

export const TipsTricksArticleCommentForm = ({itemData, refetch}: {itemData: ITipsTricksArticle, refetch? : () => void}) => {
    return (
        <section className={styles.article_comment_from}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading="h3" color="black" weight="700">Leave a Reply</Headings>
                    <Paragraph color="black" weight="500">Your email address will not be published. Required fields are marked *</Paragraph>
                </div>
                <TipsTricksCommentForm itemData={itemData} refetch={refetch}/>
            </div>
        </section>
    )
}

export default TipsTricksArticleCommentForm