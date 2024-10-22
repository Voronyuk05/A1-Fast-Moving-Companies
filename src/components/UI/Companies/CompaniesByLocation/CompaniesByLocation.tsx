import { useState } from 'react';
import { useGetCompaniesBySearchParams } from '@/hooks/useGetCompaniesBySearchParams'
import { ISearchParametrs } from '@/types/searchParametrs.types';
import LoadingCircle from '../../LoadingCircle/LoadingCircle';
import { Headings } from '../../Headings/Headings';
import { SortByFilter } from '../../SortByFilter/SortByFilter';
import { CompaniesFilter } from '../CompaniesFilter/CompaniesFilter';
import { servciesFilterArray, sortByFilterArray } from '../../../../data/dataFilters';
import { CompaniesPaginatedItems } from '../CompaniesPagination/CompaniesPagination';
import styles from './CompaniesByLocation.module.scss'


export const CompaniesByLocation = ({searchParamsObj}: {searchParamsObj: ISearchParametrs}) => {
    const {data, isPending} = useGetCompaniesBySearchParams(searchParamsObj)
    const [isShowedFilters, setIsShowedFilters] = useState(false)


    const toggleFilters = () => {
        setIsShowedFilters(!isShowedFilters)
    }

    if (isPending ) {
        return (
            <LoadingCircle/>
        )
    }

    if (data)
    return (
        <section className={styles.companies_by_location}>
            <div className={`${styles.container} ${isShowedFilters ? styles.filters_showed : ''}`}>
                <div className={styles.title}>
                    <Headings heading='h4_huge' weight='800' color='primary'>{`${data.length} Items Found`}</Headings>
                    <div className={styles.wrapper_filters}>
                        <SortByFilter searchParamName="services" filterParamLabel="Service" options={servciesFilterArray}/>
                        <SortByFilter searchParamName='sortBy' filterParamLabel="Sort By" options={sortByFilterArray} />
                        <CompaniesFilter isShowedFilters={isShowedFilters} toggleFilters={toggleFilters}/>
                    </div>
                </div>
                <CompaniesPaginatedItems itemsPerPage={12} data={data}/>
            </div>
        </section>
    )
}