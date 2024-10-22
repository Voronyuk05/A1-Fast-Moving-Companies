import { SearchCompaniesForm } from '../SearchCompaniesForm/SearchCompaniesForm';
import { Headings } from '../../Headings/Headings';
import styles from './SearchCompaniesHero.module.scss'

export const SearchCompaniesHero = () => {

    return (
        <section className={styles.search_companies_hero}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading='h2' weight='900' color='white'>Find Best Moving Companies in California</Headings>
                </div>
                <SearchCompaniesForm />
            </div>
        </section>
    )
}