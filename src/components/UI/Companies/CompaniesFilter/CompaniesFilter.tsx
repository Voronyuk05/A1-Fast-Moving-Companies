import { useRouter } from "next/navigation";
import { FiFilter } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SortByFilter } from '../../SortByFilter/SortByFilter';
import { locationsFilterArray, ratingFilterArray, tagsFilterArray } from "../../../../data/dataFilters";
import { SearchNameInput } from '../SearchNameInput/SearchNameInput';
import { SecondaryButton } from '../../Buttons/SecondaryButton';
import styles from './CompaniesFilter.module.scss'

export const CompaniesFilter = ({isShowedFilters, toggleFilters}: {isShowedFilters: boolean, toggleFilters: () => void}) => {
    const {push} = useRouter()

    const clearFilters = () => {
        push(`/location`, {scroll: false})
    }

    return (
        <div className={`${styles.filter_menu} ${isShowedFilters ? styles.showed_filters : ''}`}>
            <button className={styles.filters_button} onClick={toggleFilters}>
                <FiFilter className={styles.filter_icon}/>
                All Filters
                <MdKeyboardArrowDown className={styles.arrow_icon}/>
            </button>
            <div className={styles.filters_bar}>
                <SearchNameInput/>
                <SortByFilter searchParamName="rating" filterParamLabel="Rate" options={ratingFilterArray} />
                <SortByFilter searchParamName="addres" filterParamLabel="Location" options={locationsFilterArray}/>
                <SortByFilter searchParamName="tags" filterParamLabel="Tag" options={tagsFilterArray}/>
                <SecondaryButton onClick={clearFilters}><RxCross2 /></SecondaryButton>
            </div>
        </div>
    )
}