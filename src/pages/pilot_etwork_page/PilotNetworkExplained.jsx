import React from 'react'
import pilotnetwork from '../../assets/images/pilotnetwork.png'
import CommonBanner from '@/components/common/CommonBanner'
import CommonCircle from '@/components/common/CommonCircle'
import ThreeValue from '@/components/pilotNetwork_components/ThreeValue'
import TrainingProviders from '@/components/faq_Components/TrainingProviders'
import CommonAds from '@/components/common/CommonAds'
const PilotNetworkExplained = () => {
  return (
    <div >
      <CommonBanner image={pilotnetwork} title="Pilot Network Explained" />
      <CommonCircle />
      <ThreeValue />
          <TrainingProviders />
          <CommonAds />
    </div>
  )
}

export default PilotNetworkExplained
