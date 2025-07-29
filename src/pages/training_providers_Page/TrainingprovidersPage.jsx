import CommonAds from '@/components/common/CommonAds'
import ImageGallery from '@/components/home_components/ImageGallery'
import React from 'react'

const TrainingprovidersPage = () => {
  return (
    <div>
      <div className='section-padding-x py-16 bg-Secondary text-white flex flex-col justify-center items-center text-2xl sm:text-4xl md:text-[54px] font-bold'>Training Providers</div>
  
  <ImageGallery />
   <CommonAds />
    </div>
  )
}

export default TrainingprovidersPage
