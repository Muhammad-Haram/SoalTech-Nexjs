import LetsTalk from '@/components/LetsTalk'
import PrivacyPolicyBanner from '@/components/PrivacyPolicyBanner'
import PrivacyPolicySection from '@/components/PrivacyPolicySection'
import React from 'react'

const page = () => {
  return (
    <>
      <PrivacyPolicyBanner/>
      <PrivacyPolicySection/>
      <LetsTalk/>
    </>
  )
}

export default page