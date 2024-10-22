import { useRouter } from "next/navigation";
import { ICompany } from "@/types/companies.types";
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { CompanySwiper } from '../CompanySwiper/CompanySwiper';
import styles from './CompanyArticle.module.scss'

export const CompanyArticle = ({data}: {data: ICompany}) => {
    const {push} = useRouter()
    const {name, services, info} = data 
    const paragraphs = info.description.split("\n\n")
    
    return (
        <section className={styles.company_article}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <Headings heading="h4" color="black" weight="700">{name}</Headings>
                    <div className={styles.text}>
                        {paragraphs.map((text,index) => (
                            <Paragraph color="black" weight="500" key={index}>{text}</Paragraph>
                        ))}
                    </div>
                    <div className={styles.comparing}>
                        <div className={styles.pros}>
                            <Headings heading="h4" color="black" weight="700">Pros</Headings>
                            <ul className={styles.pros_list}>
                                {info.pros.map((point, index) => (
                                    <li key={index}><Headings heading="h5" color="black" weight="500">{point}</Headings></li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.cons}>
                        <Headings heading="h4" color="black" weight="700">Cons</Headings>
                            <ul className={styles.cons_list}>
                                {info.cons.map((point, index) => (
                                    <li key={index}><Headings heading="h5" color="black" weight="500">{point}</Headings></li>
                                ))}
                            </ul>
                        </div>
                        <PrimaryButton onClick={() => push(`/location/${name}/get-quote`)}>Get a quote</PrimaryButton>
                    </div>
                    <hr />
                    <div className={styles.services}>
                        {services.map((service, index) => (
                            <Headings key={index} heading="h5" color="primary" weight="700">{service}</Headings>
                        ))}
                    </div>
                </div>
                <div className={styles.gallery}>
                    <CompanySwiper images={info.images}/>
                </div>
            </div>
        </section>
    )
}