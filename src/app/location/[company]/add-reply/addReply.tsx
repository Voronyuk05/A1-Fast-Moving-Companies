'use client'
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { LeaveReplyForm } from '../../../../components/UI/Replies/LeaveReplyForm/LeaveReplyForm';



export default function AddReplyLayout() {
    const {company} = useParams<{company: string}>()
    const companyName = company.replace(/%20/g, " ")

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    
    return (
        <>
            <LeaveReplyForm companyName={companyName}/>
        </>
    )
}