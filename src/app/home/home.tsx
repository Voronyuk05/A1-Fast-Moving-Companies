'use client'
import { useEffect } from "react";
import { useGetLatestReplies } from '@/hooks/useGetLatestReplies';
import dynamic from "next/dynamic";
import { SearchCompaniesHero } from '../../components/UI/Companies/SearchCompaniesHero/SearchCompaniesHero';
import { BestCompaniesByLocation } from '../../components/UI/Companies/BestCompaniesByLocation/BestCompaniesByLocation';
import { RepliesSwiper } from "../../components/UI/Replies/RepliesSwiper/RepliesSwiper";

const MovingServicesSwiper = dynamic(() => import('../../components/UI/MovingServicesSwiper/MovingServicesSwiper'), {ssr: false})
const LocationsList = dynamic(() => import('@/components/UI/LocationsList/LocationsList'), {ssr: false})
const LoadingCircle = dynamic(() => import('@/components/UI/LoadingCircle/LoadingCircle'), {ssr: false})
const TipsTricksCardsSwiper = dynamic(() => import('../../components/UI/TicksTricks/TipsTricksCardsSwiper/TipsTricksCardsSwiper'), {ssr: false})
const SearchCompanies = dynamic(() => import('../../components/UI/Companies/SearchCompanies/SearchCompanies'), {ssr: false})


export default function HomeLayout() {
  const {data, isPending} = useGetLatestReplies()
  const latestReplies = data?.slice(0,6)

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  if (isPending) <LoadingCircle/>


  if (latestReplies)
  return (
    <>
      <SearchCompaniesHero/>
      <BestCompaniesByLocation location=''/>
      <MovingServicesSwiper />
      <LocationsList />
      <RepliesSwiper data={latestReplies}/>
      <TipsTricksCardsSwiper/>
      <SearchCompanies />
    </>
  )
}