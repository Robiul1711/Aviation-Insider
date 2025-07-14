import React from 'react'
import faq from '../../assets/images/faq.png'
import CommonBanner from '@/components/common/CommonBanner'
import FaqAccoridion from '@/components/faq_Components/FaqAccoridion'
import CommonAds from '@/components/common/CommonAds'
import TrainingProviders from '@/components/faq_Components/TrainingProviders'
const Faq = () => {
  return (
    <div>
      <CommonBanner image={faq} title="Frequently Asked Questions" />
      <FaqAccoridion />
      <TrainingProviders />
      <CommonAds />
    </div>
  )
}

export default Faq
