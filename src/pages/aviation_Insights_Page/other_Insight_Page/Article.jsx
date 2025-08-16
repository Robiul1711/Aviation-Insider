import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import aviationadvice from '@/assets/images/article.png'
import AllArticles from '@/components/Aviation_Advice_Components/AllArticles'
import CommonAds from '@/components/common/CommonAds'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
const Article = () => {

  const axiosPublic = useAxiosPublic();
  const { data: article } = useQuery({
    queryKey: ["articles"],
    queryFn: () => axiosPublic.get("/articles"),
  });
  return (
    <div>
      <CommonBanner image={aviationadvice} title="Aviation Articles" />
      <div className='section-padding-x py-16'>
       <p className='p-3 bg-[#F3F4F6] rounded-md text-xl mb-10'>Our individually written articles offering you advice to all things to do with flight training.</p>
      <AllArticles article={article} />
      </div>
      <CommonAds  />

    </div>
  )
}

export default Article
