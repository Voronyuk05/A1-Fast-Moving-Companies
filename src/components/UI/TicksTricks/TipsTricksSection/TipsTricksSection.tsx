import { TipsTricksCardsPagination } from '../TipsTricksCardsPagination/TipsTricksCardsPagination';
import { useGetTipsTricksArticles } from '@/hooks/useGetTipsTricksArticles';
import { LoadingCircle } from '../../LoadingCircle/LoadingCircle';
import styles from './TipsTricksSection.module.scss'

export const TipsTricksSection = () => {
    const {data, isLoading} = useGetTipsTricksArticles()

    if (isLoading) <LoadingCircle/>

    if(data)
    return (
        <section className={styles.tips_tricks_section}>
            <div className={styles.container}>
                <TipsTricksCardsPagination itemsPerPage={8} data={data}/>
            </div>
        </section>
    )
}