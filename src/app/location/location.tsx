'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HeroBar } from '../../components/UI/HeroBar/HeroBar';
import { Headings } from "@/components/UI/Headings/Headings";
import { Path } from "@/components/UI/Path/Path";
import { CompaniesByLocation } from '../../components/UI/Companies/CompaniesByLocation/CompaniesByLocation';
import { ISearchParametrs } from "@/types/searchParametrs.types";
import { BestCompaniesByLocation } from '../../components/UI/Companies/BestCompaniesByLocation/BestCompaniesByLocation';
import { Section } from '../../components/UI/Section/Section';
import { Paragraph } from '../../components/UI/Paragraph/Paragraph';
import { SearchCompanies } from "@/components/UI/Companies/SearchCompanies/SearchCompanies";
import { LocationsList } from "@/components/UI/LocationsList/LocationsList";


export default function LocationLayout() {
  const searchParams = useSearchParams()
  const [searchParamsObj, setSearchParamsObj] = useState<ISearchParametrs>({});
  const location = searchParams.get('addres') !== null ? `${searchParams.get('addres')?.replace(/%20/, " ")}` : ''
  
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])


  useEffect(() => {
    const paramsObj: ISearchParametrs = {};
    searchParams.forEach((value, key) => {
      paramsObj[key] = value;
    });
    setSearchParamsObj(paramsObj);
  }, [searchParams]);

  return (
    <>
      <HeroBar>       
        <Headings heading="h3" weight="700" color="black">{`Moving Companies ${location ? `in ${location}` : ''}`}</Headings>
      </HeroBar>
      <Path/>
      <Section>
        <Paragraph color="black" weight="500">
        Many in the United States are looking for the best moving companies because most people realize the value of professional service. A fully licensed and insured moving company is better at logistics management. The best movers can pack, load, transport, and unload safely and on time. The service can also be cheaper than self-moving. They offer both local and interstate moves. The best movers in San Francisco, San Diego, and elsewhere in California also offer storage facilities.
        Here, we analyze some of the best interstate moving companies and local movers and packers and publish movers rating and reviews so you can identify the most reputed businesses easily.
        </Paragraph>
      </Section>
      {!location && <LocationsList />}
      <BestCompaniesByLocation location={location} />
      <CompaniesByLocation searchParamsObj={searchParamsObj}/>
      <Section>
        <Paragraph color="black" weight="500">
          <>
          Many in the United States are looking for the best moving companies because most people realize the value of professional service. A fully licensed and insured moving company is better at logistics management. The best movers can pack, load, transport, and unload safely and on time. The service can also be cheaper than self-moving. They offer both local and interstate moves. The best movers in San Francisco, San Diego, and elsewhere in California also offer storage facilities.
          <br />
          <br />
          Here, we analyze some of the best interstate moving companies and local movers and packers and publish movers rating and reviews so you can identify the most reputed businesses easily.
          <br />
          <br />
          Americans move a lot. Statistics reveal that Americans move 11.7 times on an average in their lifetime. They move for various reasons – a job change, upsizing to a new home, or just to live in a new neighborhood. It has also been noticed that younger people move more frequently. According to the Annual Social and Economic Supplement of the Current Population Survey for 2013, most moves are related to housing (48%), followed by family issues (30.3%), and job relocations (19.4%).
          <br />
          <br />
          The US Census Bureau data reveals that 7.4 million Americans moved in 2019. It is common in the state of California as well. 501,000 people moved into the state in 2019, but many of them were foreign nationals. On the other hand, 691,000 local residents relocated to other states, with most of them going to Texas, Arizona, Washington state, Nevada, and Oregon. Most recently, Elon Musk too decided to move out from the Golden State to Texas.
          </>
        </Paragraph>
      </Section>
      <SearchCompanies />
    </>
  )
}