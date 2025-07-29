import React from 'react'
import aboutbanner from '@/assets/images/aboutbanner.png'
import CommonBanner from '@/components/common/CommonBanner'
import AboutHero from '@/components/anoutUs_Components/AboutHero'
import AboutDetails from '@/components/anoutUs_Components/AboutDetails'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import CommonAds from '@/components/common/CommonAds'
const AboutUs = () => {
  return (
    <div>
      
      <CommonBanner image={aboutbanner} title="An Introduction to Pilot Network" />
      <AboutHero />
      <AboutDetails />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-14'}/>
      <CommonAds />
    </div>
  )
}

export default AboutUs
