import React from 'react'
import becomepilot from '../../assets/images/becomepilot.png'
import CommonBanner from '@/components/common/CommonBanner'
import SelectYourDesired from '../../components/selectYourDesired_components/SelectYourDesired'
import CommonAds from '@/components/common/CommonAds'
const BecomeAPilot = () => {
  return (
    <div>
      <CommonBanner className={'!h-[250px] !sm:h-[300px] !lg:h-[800px]'} image={becomepilot} title="Become a Pilot" description={"Take our interactive guide to help you find the right route for you to the flight deck"}  /> 
      <SelectYourDesired />
      <CommonAds isShow />
    </div>
  )
}

export default BecomeAPilot
