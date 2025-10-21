import React from 'react'
import contact from '@/assets/images/contact.png'
import CommonBanner from '@/components/common/CommonBanner'
import CommonAds from '@/components/common/CommonAds'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import ContaactForm from './ContaactForm'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '@/hooks/useAxiosPublic'
const ContactUs = () => {
    const axiosPublic = useAxiosPublic();
  const {data:contactBanner,isLoading,error}=useQuery({
    queryKey:["contact-banner"],
    queryFn:async()=>{
        const response=await axiosPublic.get("/cms/contact_page/banner_section");
        return response?.data;
    }
})
console.log(contactBanner?.data?.banner_section?.image);
  return (
    <div>
      <CommonBanner image={contactBanner?.data?.banner_section?.image} title={contactBanner?.data?.banner_section?.title} />
      <ContaactForm />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-14'}/>
      <CommonAds />
    </div>
  )
}

export default ContactUs
