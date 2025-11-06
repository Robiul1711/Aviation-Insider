import React from 'react'
import faq from '../../assets/images/faq.png'
import CommonBanner from '@/components/common/CommonBanner'
import FaqAccoridion from '@/components/faq_Components/FaqAccoridion'
import CommonAds from '@/components/common/CommonAds'
import TrainingProviders from '@/components/faq_Components/TrainingProviders'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
const Faq = () => {
    const axiosPublic = useAxiosPublic();
  const { data: faqbanner, isLoading } = useQuery({
    queryKey: ['faqbanner'],
    queryFn: () => axiosPublic.get('/cms/faq_page/banner_section'),
  });
  return (
    <div>
      <CommonBanner image={faqbanner?.data?.data?.banner_section?.image} title={faqbanner?.data?.data?.banner_section?.title} isLoading={isLoading}/>
      <FaqAccoridion />
      <TrainingProviders />
      <CommonAds />
    </div>
  )
}

export default Faq
