import { ITipsTricksArticle } from "@/types/tipsTricks.types";
import Image from "next/image";
import styles from './TipsTricksArticle.module.scss'
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import { TipsTricksArticleTable } from '../TipsTricksArticleTable/TipsTricksArticleTable';

export const TipsTricksArticle = ({data}: {data: ITipsTricksArticle}) => {
    const {publishedAt, info, comments} = data

    return (
        <section className={styles.article}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top_bar}>
                        <Headings heading="h4" color="black" weight="300">{`Posted on ${publishedAt}`}</Headings>
                        <Headings heading="h4" color="primary" weight="400">{`${comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`}`}</Headings>
                    </div>
                    <hr />
                    <div className={styles.article_text}>
                        {info.paragraphs.map(({paragraphText, paragraphTitle}, index) => {
                            const paragraph = paragraphText.split("\n\n")
                            return (
                                <div className={styles.paragraph} key={index}>
                                    {paragraphTitle && <Headings heading="h4" color="black" weight="700">{paragraphTitle}</Headings>}
                                    {paragraph.map((text, index) => (
                                        <Paragraph key={index}  color="black" weight="400">{text}</Paragraph>
                                    ))}
                                </div>   
                            )
                        })}
                    </div>
                    {info.table && <TipsTricksArticleTable tableData={info.table}/>}
                </div>
                <div className="wrapper_image">
                    <Image  src={info.articleImage} alt='' width={500} height={380} />
                </div>
            </div>
        </section>
    )
}