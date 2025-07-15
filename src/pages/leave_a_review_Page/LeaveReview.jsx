import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import leave_a_review from '../../assets/images/leave_a_review.png'
import ReviewDetails from '@/components/leave_a_review_Components/ReviewDetails'
import CommonAds from '@/components/common/CommonAds'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import SchoolFinder from '@/components/leave_a_review_Components/SchoolFinder'
const LeaveReview = () => {
  return (
    <div>
      <CommonBanner image={leave_a_review} title="Leave a Review" />
      <ReviewDetails />
      <SchoolFinder />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-14'}/>
      <CommonAds />
    </div>
  )
}

export default LeaveReview
