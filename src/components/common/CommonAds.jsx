import React from 'react'
import ads from '../../assets/images/ads.png'
import { Link } from 'react-router-dom'
const CommonAds = () => {
  return (
    <div className='section-padding-x py-14 flex justify-center items-center bg-Secondary'>
        <Link to={'/apple'}>
      <img src={ads} alt="" />
        </Link>
    </div>
  )
}

export default CommonAds
