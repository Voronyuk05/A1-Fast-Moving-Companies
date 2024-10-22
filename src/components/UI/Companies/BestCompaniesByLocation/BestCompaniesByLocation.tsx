import { useGetBestCompanies } from "@/hooks/useGetBestCompanies"
import { CompaniesList } from '../CompaniesList/CompaniesList';
import { Headings } from '../../Headings/Headings';
import { LoadingCircle } from "../../LoadingCircle/LoadingCircle";
import { Section } from "../../Section/Section";
import Link from "next/link";
import styles from './BestCompaniesByLocation.module.scss'

export const BestCompaniesByLocation = ({location}: {location: string}) => {
    const {data, isPending} = useGetBestCompanies(location)

    if (isPending) (<LoadingCircle/>)

    if (data)
    return (
        <Section>
            <>
                <div className={styles.title}>
                    {location ? (
                            <Headings heading="h3" color="black" weight="800">{`Top 3 Companies in ${location}`}</Headings>
                        ) : (
                            <>
                                <Headings heading="h3" color="black" weight="800">Best Moving Companies</Headings>
                                <Link href='/location'>See all</Link>
                            </>
                        )
                    }
                </div>
                <CompaniesList data={data}/>
            </>
        </Section>
    )
}

export default BestCompaniesByLocation