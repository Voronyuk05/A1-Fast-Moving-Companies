import Link from 'next/link'
import { locationsFilterArray } from '../../../data/dataFilters'
import styles from './LocationsList.module.scss'
import { Headings } from '@/components/UI/Headings/Headings';

export const LocationsList = () => {
    return (
        <section className={styles.locations}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading='h2' weight='900' color='black' >Find Your Movers in Locations</Headings>
                </div>
                <ul className={styles.locations_list}>
                    {locationsFilterArray.slice(1).map(({label, value}, index) => (
                        <li className={styles.location_item} key={index}><Link href={`/location?addres=${value}`}>{label}</Link></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default LocationsList