import CommonAds from '@/components/common/CommonAds'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import BrandSection from '@/components/home_components/BrandSection'
import ContactInfoSection from '@/components/School_Profile_Components/ContactInfoSection'
import QualityFlyProfile from '@/components/School_Profile_Components/QualityFlyProfile'
import QualityFlyReviews from '@/components/School_Profile_Components/QualityFlyReviews'
import ReviewsForSchool from '@/components/School_Profile_Components/ReviewsForSchool'
import SchoolBanner from '@/components/School_Profile_Components/SchoolBanner'
import SchoolDetails from '@/components/School_Profile_Components/SchoolDetails'
import SchoolStatsSection from '@/components/School_Profile_Components/SchoolStatsSection'
import SchoolSwiper from '@/components/School_Profile_Components/SchoolSwiper'
import StudentStatsSection from '@/components/School_Profile_Components/StudentStatsSection'
import StudentsWentOnWork from '@/components/School_Profile_Components/StudentsWentOnWork'
import TrainingOverview from '@/components/School_Profile_Components/TrainingOverview'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

const SchoolProfilePage = () => {
  const {id}=useParams()
  const axiosPublic = useAxiosPublic();
  const {data:schoolDetals ,isLoading } = useQuery({
    queryKey: ['school-details'],
    queryFn: () => axiosPublic.get(`/flight-school/details/${id}`),
  })
  const SchoolDetail = schoolDetals?.data?.data || [];
  return (
    <div>
      <SchoolBanner SchoolDetail={SchoolDetail}/>
      <QualityFlyProfile SchoolDetail={SchoolDetail} />
      <SchoolSwiper SchoolDetail={SchoolDetail} />
      <SchoolDetails SchoolDetail={SchoolDetail}  />
      <StudentStatsSection SchoolDetail={SchoolDetail} />
      <QualityFlyReviews  SchoolDetail={SchoolDetail}/>
      <TrainingOverview SchoolDetail={SchoolDetail} />
      <SchoolStatsSection SchoolDetail={SchoolDetail} />
      <div className='py-8 md:py-16'>
    <h1 className='text-3xl font-semibold mb-4 text-center'>Students went on to work at these airlines</h1>
      <StudentsWentOnWork SchoolDetail={SchoolDetail} />
      </div>
      <ContactInfoSection SchoolDetail={SchoolDetail} />
      <ReviewsForSchool SchoolDetail={SchoolDetail} />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-7 md:py-14'} />
      <CommonAds />
    </div>
  )
}

export default SchoolProfilePage
