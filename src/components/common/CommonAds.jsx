import React from 'react'
import ads from '../../assets/images/ads.png'
import ads2 from '../../assets/images/ads2.png'

const CommonAds = ({ isShow }) => {
  return (
    <div className='section-padding-x py-14 flex justify-center items-center gap-10 bg-Secondary'>
      <a href="https://ifrsimulator.com/campaign-redirect/pilot-network-728x90" target="_blank" rel="noopener noreferrer">
        <img src={ads} alt="IFR Simulator Ad" />
      </a>
      {isShow && (
        <a href="https://www.pooleys.com/" target="_blank" rel="noopener noreferrer">
          <img src={ads2} alt="Pooleys Ad" />
        </a>
      )}
    </div>
  )
}

export default CommonAds
