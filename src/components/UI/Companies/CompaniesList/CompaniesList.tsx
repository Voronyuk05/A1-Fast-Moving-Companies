
import { ICompany } from '@/types/companies.types'
import { Company } from '../Company/Company'
import styles from './CompaniesList.module.scss'

export const CompaniesList = ({data}: {data: ICompany[]}) => {

    return (
        <ul className={styles.companies_list}>
            {data.map(({id, logo, name, addres, tags, tel, rating, services, info}) => (
                <Company
                key={id}
                id={id}
                logo={logo}
                name={name}
                addres={addres}
                tel={tel}
                rating={rating}
                services={services}
                info={info}
                tags={tags}/>
            ))}
        </ul>
    )
}