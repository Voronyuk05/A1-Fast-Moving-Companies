import { ITipsTricksArticleTable } from '@/types/tipsTricks.types'
import styles from './TipsTricksArticleTable.module.scss'

export const TipsTricksArticleTable = ({tableData}: {tableData: ITipsTricksArticleTable}) => {
    
    return (
        <table className={styles.table}>
            <thead className={styles.table_head}>
                {tableData.head.map((tableRow, index) => (
                    <tr className={styles.table_row} key={index}>
                        {tableRow.map((tableHeadItem,index) => (
                            <th className={`${index === 0 ? styles.table_firstColumn : ''} ${styles.table_data}`} key={index}>{tableHeadItem}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className={styles.table_body}>
                {tableData.body.map((tableRow, index) => (
                    <tr className={styles.table_row} key={index}>
                        {tableRow.map((tableBodyItem,index) => (
                            <td className={`${index === 0 ? styles.table_firstColumn : ''} ${styles.table_data}`} key={index}>{tableBodyItem}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}