'use client'
import { useEffect } from "react";
import { HeroBar } from '../../components/UI/HeroBar/HeroBar';
import { Headings } from '../../components/UI/Headings/Headings';
import { Path } from '../../components/UI/Path/Path';
import { LocationsList } from '../../components/UI/LocationsList/LocationsList';
import { TipsTricksSection } from '../../components/UI/TicksTricks/TipsTricksSection/TipsTricksSection';


export default function TipsTricksLayout() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <>
      <HeroBar>
        <Headings heading="h3" color="black" weight="700">Tips and Tricks</Headings>
      </HeroBar>
      <Path/>
      <TipsTricksSection />
      <LocationsList />

    </>
  )
}