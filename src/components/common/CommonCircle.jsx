import React from 'react'
import three from '../../assets/images/3.png'
import Title from './Title'
const CommonCircle = () => {
  return (
    <div className='section-padding-x py-16 bg-Secondary flex flex-col justify-center items-center'>
      <img src={three} alt="" />
      <Title level="title20" className="text-white text-center mt-10"> Our key values function as the backbone to our operations. By engraining these key values into our fabric it enables us to ensure that any practices we undertake, and any decisions we make are done according to a responsible framework that is conducive to our ethos. As a business we strive to perform with Integrity, Impartiality and Transparency in everything we do. </Title>
    </div>
  )
}

export default CommonCircle
