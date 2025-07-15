import React from 'react'
import ads from '../../assets/images/ads.png'
import ads2 from '../../assets/images/ads2.png'
import { Link } from 'react-router-dom'
const CommonAds = ({isShow}) => {
  return (
    <div className='section-padding-x py-14 flex justify-center items-center gap-10 bg-Secondary'>
        <Link to={'/apple'}>
      <img src={ads} alt="" />
        </Link>
        {
          isShow && <Link to={'/apple'}>
      <img src={ads2} alt="" />
        </Link>
        }
    </div>
  )
}

export default CommonAds
