import React from 'react'
import BrandSection from './BrandSection'
import Title from '../common/Title'
import CommonButton from '../common/CommonButton'

const LeadingFlightSchool = () => {
  return (
    <div>
            <div className="py-14 mx-auto flex flex-col items-center gap-5">
        <Title level="title40" className="text-black text-center">
        The Leading Flight School Review Website
        </Title>
        <Title level="title20" className="text-black text-center max-w-6xl mx-auto ">
       Pilot Network Plus allows flight schools the ability to market themselves directly to our thousands of monthly website visitors with custom images, videos and over 35 editable sections of information. Click below to find out more.
        </Title>
        <BrandSection />
        <CommonButton variant="secondary" onClick={() => window.location.href = "/plus-schools"}>Find Out More</CommonButton>
      </div>
    </div>
  )
}

export default LeadingFlightSchool
