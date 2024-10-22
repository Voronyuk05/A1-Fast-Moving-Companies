import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { ICompany } from '@/types/companies.types'
import { Headings } from '../../Headings/Headings';
import { Tag } from '../../Tag/Tag';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Stars } from '../../Stars/Stars';
import { RiMapPin2Fill } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";
import { SelectEl } from '../../Select/Select';
import { locationDefaultValue, locationsFilterArray } from '@/data/dataFilters';
import { useState } from 'react';
import { ISelectOptions } from '@/types/select.types';
import styles from './CompanyPageHero.module.scss'

export const CompanyPageHero = ({data, reviews}:  {data: ICompany, reviews: number}) => {
    const {back} = useRouter()
    const {name, tel, rating ,tags} = data 
    const [location, setLocation] = useState<ISelectOptions>(locationDefaultValue)

    const handleSelectLocation = async (e: ISelectOptions) => {
        await navigator.clipboard.writeText(e.label)
        setLocation(e)
        await navigator.clipboard.writeText(e.label)
        toast('Copied',
            {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#615959',
                color: '#fff',
              },
            }
        );
    }

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value)
        toast('Copied',
            {
              icon: '👏',
              style: {
                borderRadius: '10px',
                background: '#615959',
                color: '#fff',
              },
            }
        );
    }

    return (
        <div className={styles.wrapper_hero}>
            <MdKeyboardArrowLeft className={styles.arrow_back} onClick={() => back()}/>
            <div className={styles.left_bar}>
                <div className={styles.title}>
                    <Headings heading='h3' color='black' weight='500'>{name}</Headings>
                </div>
                <div className={styles.info}>
                    <div className={styles.tags}>
                        {tags?.map((tag, index) => (
                            <Tag bgColor={`${tag === 'popular' ? 'crimson' : 'green'}`} key={index}>
                                {tag}
                            </Tag>
                        ))}
                    </div>
                    <Headings heading='h5' color='primary' weight='400'>{`${reviews} reviews`}</Headings>
                    <Headings heading='h5' color='black' weight='700'><Stars rating={rating}/></Headings>
                </div>
            </div>
            <div className={styles.right_bar}>
                <div className={styles.comunication}>
                    <RiMapPin2Fill/>
                    <SelectEl selectedOption={location} setSelectedOption={handleSelectLocation} options={locationsFilterArray} />
                </div>
                <div className={styles.comunication} onClick={() => handleCopy(tel)}>
                    <MdLocalPhone />
                    <Headings heading='h4' color='black' weight='500'>{tel}</Headings>
                </div>
            </div>
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        </div>
    )
}