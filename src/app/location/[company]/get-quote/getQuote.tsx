'use client'
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { GetQuoteForm } from "@/components/UI/Companies/getQuoteForm/GetQuoteForm"
import { useGetCompanyByName } from "@/hooks/useGetCompanyByName"



export default function GetQuotesLayout() {
    const {company} = useParams<{company: string}>()
    const companyName = company.replace(/%20/g, " ")
    const {data: companyData} = useGetCompanyByName(companyName)
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    if (companyData)
    return (
        <>
            <GetQuoteForm companyData={companyData}/>
        </>
    )
}