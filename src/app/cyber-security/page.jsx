import CustomerSection from '@/components/CustomerSection'
import CyberBanner from '@/components/CyberBanner'
import CyberDreamDiv from '@/components/CyberDreamDiv'
import CyberRecruitSection from '@/components/CyberRecruitSection'
import LetsTalk from '@/components/LetsTalk'
import Swipper from '@/components/Swipper'
import React from 'react'

const page = () => {
  return (
    <>
    <CyberBanner/>
    <CyberRecruitSection/>
    <CyberDreamDiv/>
    <CustomerSection/>
    <Swipper/>
    <LetsTalk/>
    </>
  )
}

export default page