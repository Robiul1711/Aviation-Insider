import React from 'react'
import three from '../../assets/images/3.png'
import Title from './Title'
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const CommonCircle = () => {
    const axiosPublic = useAxiosPublic();
  const {data}=useQuery({
    queryKey:["pilotnetwork_hero"],
    queryFn:()=>axiosPublic.get("/cms/pilot_network_page/hero_section"),
   

  })

  return (
<div className="section-padding-x py-16 bg-Secondary flex flex-col justify-center items-center">
  <img
    src={data?.data?.data?.hero_section?.image}
    alt="Hero Section"
    className="w-full max-w-xl h-[250px] object-contain sm:object-cover rounded-lg"
  />
  <Title
    level="title20"
    className="text-white text-center mt-10 px-4 sm:px-8"
  >
    <span
      dangerouslySetInnerHTML={{
        __html: data?.data?.data?.hero_section?.description,
      }}
    ></span>
  </Title>
</div>

  )
}

export default CommonCircle
