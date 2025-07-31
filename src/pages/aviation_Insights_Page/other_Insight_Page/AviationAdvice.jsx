import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import aviationadvice from '@/assets/images/aviation-advice.png'
import CommonAds from '@/components/common/CommonAds'
import AllAdviceAricle from '@/components/Aviation_Advice_Components/AllAdviceAricle'
const AviationAdvice = () => {
  return (
    <div>
      <CommonBanner image={aviationadvice} title="Aviation Advice" />
      <div className='section-padding-x py-16'>
       <p className='p-3 bg-[#F3F4F6] rounded-md text-xl mb-10'>Our individually written articles offering you advice to all things to do with flight training.</p>
      <AllAdviceAricle />
      </div>
      <CommonAds />

    </div>
  )
}

export default AviationAdvice
