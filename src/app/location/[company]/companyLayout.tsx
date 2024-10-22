'use client'
import { useEffect } from "react";
import { useParams } from "next/navigation"
import dynamic from "next/dynamic";
import { useGetCompanyByName } from "@/hooks/useGetCompanyByName"
import { useGetRepliesByCompany } from "@/hooks/useGetRepliesByCompany";
import { LoadingCircle } from "@/components/UI/LoadingCircle/LoadingCircle"
import { HeroBar } from '../../../components/UI/HeroBar/HeroBar';
import { Path } from "@/components/UI/Path/Path";
import { CompanyPageHero } from '../../../components/UI/Companies/CompanyPageHero/CompanyPageHero';
import { CompanyArticle } from '../../../components/UI/Companies/CompanyArticle/CompanyArticle';

const CompanyMapLocations = dynamic(() => import('../../../components/UI/Companies/CompanyMapLocations/CompanyMapLocations'))
const BestCompaniesByLocation = dynamic(() => import('../../../components/UI/Companies/BestCompaniesByLocation/BestCompaniesByLocation'))
const CompanyReplies = dynamic(() => import("@/components/UI/Replies/CompanyReplies/CompanyReplies"))


export default function CompanyLayout() {
  const {company} = useParams<{company: string}>()
  const companyName = company.replace(/%20/g, " ")
  const {data: dataCompanies} = useGetCompanyByName(companyName)
  const {data: dataCompanyReplies, isPending: lastPending} = useGetRepliesByCompany(companyName)

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  if (lastPending) <LoadingCircle/>

  if (dataCompanies && dataCompanyReplies)
  return (
    <>
      <HeroBar>
        <CompanyPageHero data={dataCompanies} reviews={dataCompanyReplies.length}/>
      </HeroBar>
      <Path/>
      <CompanyArticle data={dataCompanies}/>
      <CompanyMapLocations location={dataCompanies.addres}/>
      <CompanyReplies data={dataCompanyReplies} rating={dataCompanies.rating}/>
      <BestCompaniesByLocation location=""/>
    </>
  )
}