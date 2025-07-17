import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import triningprovider from '@/assets/images/flightschool.png'
import CommonAds from '@/components/common/CommonAds'
import TopratedProviders from '@/components/trainingProvidersAllComponents/TopratedProviders'

const FlightSchoolReviewPage = () => {
  return (
    <div>
    <CommonBanner image={triningprovider} title="Flight School Review"/>
    <div className='section-padding-x pb-10'>

      <div className='mt-10'>
       <TopratedProviders/>

      </div>
    </div>
      <CommonAds />
    </div>
  )
}

export default FlightSchoolReviewPage
