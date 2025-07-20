import CommonAds from '@/components/common/CommonAds'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import BrandSection from '@/components/home_components/BrandSection'
import ContactInfoSection from '@/components/School_Profile_Components/ContactInfoSection'
import QualityFlyProfile from '@/components/School_Profile_Components/QualityFlyProfile'
import QualityFlyReviews from '@/components/School_Profile_Components/QualityFlyReviews'
import ReviewsForSchool from '@/components/School_Profile_Components/ReviewsForSchool'
import SchoolBanner from '@/components/School_Profile_Components/SchoolBanner'
import SchoolDetails from '@/components/School_Profile_Components/SchoolDetails'
import SchoolStatsSection from '@/components/School_Profile_Components/SchoolStatsSection'
import SchoolSwiper from '@/components/School_Profile_Components/SchoolSwiper'
import StudentStatsSection from '@/components/School_Profile_Components/StudentStatsSection'
import TrainingOverview from '@/components/School_Profile_Components/TrainingOverview'
import React from 'react'

const SchoolProfilePage = () => {
  return (
    <div>
      <SchoolBanner />
      <QualityFlyProfile />
      <SchoolSwiper />
      <SchoolDetails />
      <StudentStatsSection />
      <QualityFlyReviews />
      <TrainingOverview />
      <SchoolStatsSection />
      <div className=' py-16'>
    <h1 className='text-3xl font-semibold mb-4 text-center'>Students went on to work at these airlines</h1>
      <BrandSection />
      </div>
      <ContactInfoSection />
      <ReviewsForSchool />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-14'} />
      <CommonAds />
    </div>
  )
}

export default SchoolProfilePage
