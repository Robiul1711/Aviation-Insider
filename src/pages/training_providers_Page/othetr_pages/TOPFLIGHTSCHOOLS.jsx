import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import triningprovider from '@/assets/images/triningprovider.png'
import TopratedProviders from '@/components/trainingProvidersAllComponents/TopratedProviders'
import Title from '@/components/common/Title'
import CommonAds from '@/components/common/CommonAds'

const TOPFLIGHTSCHOOLS = () => {
  return (
    <div>
    <CommonBanner image={triningprovider} title="Top Rated Training Providers"/>
    <div className='section-padding-x'>
      <Title level="title20" className="text-black  py-10">A list of all rated Training Providers. To be featured in this list the training provider must have received at least 3 reviews. </Title>
      <TopratedProviders />
    </div>
      <CommonAds />
    </div>
  )
}

export default TOPFLIGHTSCHOOLS
