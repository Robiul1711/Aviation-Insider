import React from 'react'
import image from '@/assets/images/Military.png'
import CommonBanner from '../../../components/common/CommonBanner'
import CommonAds from '../../../components/common/CommonAds'
import MilitaryDetails from '../../../components/selectYourDesired_components/MilitaryDetails'
const Military = () => {
  return (
    <div>
      <CommonBanner image={image} title="Military" />
      <MilitaryDetails />
      <CommonAds isShow />
    </div>
  )
}

export default Military
