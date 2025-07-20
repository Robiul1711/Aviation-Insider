import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import aviationadvice from '@/assets/images/article.png'
import AllArticles from '@/components/Aviation_Advice_Components/AllArticles'
import CommonAds from '@/components/common/CommonAds'
const Article = () => {
  return (
    <div>
      <CommonBanner image={aviationadvice} title="Aviation Articles" />
      <div className='section-padding-x py-16'>
       <p className='p-3 bg-[#F3F4F6] rounded-md text-xl mb-10'>Our individually written articles offering you advice to all things to do with flight training.</p>
      <AllArticles />
      </div>
      <CommonAds />

    </div>
  )
}

export default Article
