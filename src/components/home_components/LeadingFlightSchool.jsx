import React from 'react'
import BrandSection from './BrandSection'
import Title from '../common/Title'
import CommonButton from '../common/CommonButton'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

const LeadingFlightSchool = () => {
  const axiosPublic = useAxiosPublic();
  const {data:leadingSchool}=useQuery({
    queryKey:["leading-school"],
     queryFn:async()=>{
      const res=await axiosPublic.get('/cms/home_page/show_case_section');
      return res.data;
    }
  })
  console.log(leadingSchool?.data?.show_case_section)
  return (
    <div >
            <div className=" py-8 md:py-14 mx-auto flex flex-col items-center gap-5 px-4">
        <Title level="title40" className="text-black text-center">
       {leadingSchool?.data?.show_case_section?.title}
        </Title>
        <Title level="title20" className="text-black text-center max-w-6xl mx-auto ">
      <span dangerouslySetInnerHTML={{ __html: leadingSchool?.data?.show_case_section?.description }}></span>
        </Title>
        <BrandSection />
        <CommonButton variant="secondary" onClick={() => window.location.href = "/plus-schools"}>Find Out More</CommonButton>
      </div>
    </div>
  )
}

export default LeadingFlightSchool
