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
      <OtherCommonLinks className={'gap-4 grid grid-cols-2 md:grid-cols-4 py-8 md:py-16 section-padding-x'}/>
      <CommonAds />
    </div>
  )
}

export default LeaveReview
