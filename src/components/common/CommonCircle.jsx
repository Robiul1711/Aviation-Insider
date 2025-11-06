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
  console.log(data?.data?.data?.hero_section?.description);
  return (
    <div className='section-padding-x py-16 bg-Secondary flex flex-col justify-center items-center'>
      <img src={three} alt="" />
      <Title level="title20" className="text-white text-center mt-10"> <span dangerouslySetInnerHTML={{__html: data?.data?.data?.hero_section?.description }}></span> </Title>
    </div>
  )
}

export default CommonCircle
