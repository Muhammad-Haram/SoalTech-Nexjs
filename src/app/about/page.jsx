import AboutFullCard from '@/components/AboutFullCard'
import AboutMission from '@/components/AboutMission'
import AboutUsCards from '@/components/AboutUsCards'
import AboutUsHero from '@/components/AboutUsHero'
import CustomerSection from '@/components/CustomerSection'
import HowWeWork from '@/components/HowWeWork'
import LetsTalk from '@/components/LetsTalk'
import StateSection from '@/components/StateSection'
import Swipper from '@/components/Swipper'
import WhatWeDo from '@/components/WhatWeDo'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const page = () => {
  return (
    <>
    <AboutUsHero/>
    <WhatWeDo/>
    <WhoWeAre/>
    <StateSection/>
    <AboutUsCards/>
    <AboutFullCard/>
    <HowWeWork/>
    <AboutMission/>
    <CustomerSection/>
    <Swipper/>
    <LetsTalk/>
    </>
  )
}

export default page