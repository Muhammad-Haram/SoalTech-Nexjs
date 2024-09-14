import CustomerSection from '@/components/CustomerSection'
import DeveloperBanner from '@/components/DeveloperBanner'
import DeveloperDreamDiv from '@/components/DeveloperDreamDiv'
import DeveloperRecruit from '@/components/DeveloperRecruit'
import DeveloperWhatWeDo from '@/components/DeveloperWhatWeDo'
import LetsTalk from '@/components/LetsTalk'
import Swipper from '@/components/Swipper'
import React from 'react'

const page = () => {
  return (
    <>
    <DeveloperBanner/>
    <DeveloperRecruit/>
    <DeveloperWhatWeDo/>
    <DeveloperDreamDiv/>
    <CustomerSection/>
    <Swipper/>
    <LetsTalk/>
    </>
  )
}

export default page