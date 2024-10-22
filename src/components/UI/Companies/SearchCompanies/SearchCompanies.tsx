import { SearchCompaniesForm } from '../SearchCompaniesForm/SearchCompaniesForm';
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import styles from './SearchCompanies.module.scss'

export const SearchCompanies = () => {

    return (
        <section className={styles.search_companies}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading='h2' weight='900' color='black'>100% Free Moving Quotes</Headings>
                    <Paragraph color='black' weight='500'>Compare Top Movers and Save Money!</Paragraph>
                </div>
                <SearchCompaniesForm />
            </div>
        </section>
    )
}

export default SearchCompanies