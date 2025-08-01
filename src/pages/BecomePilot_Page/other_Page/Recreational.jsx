import React from 'react'
import image from '@/assets/images/Military.png'

import CommonBanner from '@/components/common/CommonBanner'
import CommonAds from '@/components/common/CommonAds'
import Title from '@/components/common/Title'
import CommonButton from '@/components/common/CommonButton'
const Recreational = () => {
  return (
    <div>
      <CommonBanner image={image} title="Military" />
    <div className="section-padding-x py-10 md:py-16">
        <Title level="title40" className="text-black text-center">
        Where do you want to train?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 pt-5 md:mt-10">
        <CommonButton variant='secondary' onClick={() => window.location.href = "/europe-ppl"} >Europe</CommonButton>
        <CommonButton variant='secondary' onClick={() => window.location.href = "/uk-ppl"}>United Kingdom</CommonButton>
        </div>

    </div>
      <CommonAds isShow />
    </div>
  )
}

export default Recreational
