import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import { ICompany } from '@/types/companies.types'
import { Headings } from '@/components/UI/Headings/Headings';
import { Tag } from '../../Tag/Tag';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { RiMapPin2Fill } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Stars } from '../../Stars/Stars';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { usePutCompany } from '@/hooks/usePutCompany';
import { IReply } from '@/types/replies.types';
import { useGetRepliesByCompany } from '@/hooks/useGetRepliesByCompany';
import placeHolderImage from '../../../../../public/image-placeholder.jpg'
import styles from './Company.module.scss'

export const Company = ({id, logo, name, addres, tags, tel, rating, services, info}: ICompany) => {    
    const {data: companyReplies} = useGetRepliesByCompany(name)
    const {mutate} = usePutCompany(id)
    const {push} = useRouter()
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    useEffect(() => {
        const companyActualRating = companyReplies ? handleSumCompanyRating(companyReplies) : rating
        mutate({
            id: id,
            logo: logo,
            name: name,
            addres: addres,
            tags: tags,
            tel: tel,
            rating: companyActualRating,
            services: services,
            info: info
        })
    }, [])

    const handleSumCompanyRating = (data: IReply[]): number => {
        let sumedRating: number = 0
        for (const reply of data) {
            sumedRating += reply.rating
        } 
        const result = Math.round(sumedRating/data.length * 10) / 10
        return result ? result : 0
    }


    return (
        <li ref={ref} className={`${inView ? styles.showed : ''} ${styles.company_card} `}>
            <div className={styles.card_top}>
                {logo ? (
                    <Image src={logo} alt={`${name} logo`} blurDataURL='/image-placeholder.jpg' placeholder='blur' width='150' height='150'/>
                ) : (
                    <Image src={placeHolderImage} alt='placeholder picture' width='150' height='150'/> 
                )}
                <div className={styles.title}>
                    <Headings heading='h4' weight='700' color='black'>{name}</Headings>
                    <Headings heading='h5' weight='700' color='black'><Stars rating={rating}/></Headings>
                </div>
                <div className={styles.tags}>
                    {tags?.map((tag, index) => (
                        <Tag bgColor={`${tag === 'popular' ? 'crimson' : 'green'}`} key={index}>
                            {tag}
                        </Tag>
                    ))}
                </div>
            </div>
            <hr />
            <div className={styles.card_bottom}>
                <div className={styles.info}>
                    <RiMapPin2Fill/>
                    <Headings heading='h5' weight='500' color='black'>
                        {addres.map(({location}, index) => (
                            <span key={index}>{`${location}, `}</span>
                        ))}
                    </Headings>
                </div>
                <div className={styles.info}>
                    <MdLocalPhone/>
                    <Headings heading='h4' weight='500' color='black'>{`${tel}`}</Headings>
                </div>
                <div className={styles.services}>
                    <Headings heading='h5' color='primary' weight='500'><>{`Services +${services.length} `} <MdKeyboardArrowDown className={styles.arrow_icon}/></></Headings>
                    <ul className={styles.services_list}>
                        {services.map((service, index) => (
                            <li key={index} >{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <PrimaryButton onClick={() => push(`/location/${name}`)}>
                See More
            </PrimaryButton>
        </li>
    )
}