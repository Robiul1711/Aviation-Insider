import React, { use } from 'react'
import aboutbanner from '@/assets/images/aboutbanner.png'
import CommonBanner from '@/components/common/CommonBanner'
import AboutHero from '@/components/anoutUs_Components/AboutHero'
import AboutDetails from '@/components/anoutUs_Components/AboutDetails'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import CommonAds from '@/components/common/CommonAds'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '@/hooks/useAxiosPublic'
const AboutUs = () => {
  const axiosPublic=useAxiosPublic();
    const { data:aboutBanner, isLoading, error } = useQuery({
    queryKey: ['aboutbanner'],
    queryFn: async () => {
      const response = await axiosPublic.get(`/cms/about_page/banner_section`);
      return response.data;
    }
  });
  return (
    <div>
      {
        isLoading && (
     <div>
      
     </div>
        )
      }
      <CommonBanner image={aboutBanner?.data?.banner_section?.image} title={aboutBanner?.data?.banner_section?.title} isLoading={isLoading} />
      <AboutHero />
      <AboutDetails />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-14'}/>
      <CommonAds />
    </div>
  )
}

export default AboutUs
