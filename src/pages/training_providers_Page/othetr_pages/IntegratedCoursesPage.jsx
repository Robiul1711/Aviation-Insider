import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import triningprovider from '@/assets/images/triningprovider.png'
import Title from '@/components/common/Title'
import CommonAds from '@/components/common/CommonAds'
import SearchAndSort from '@/components/common/SearchAndSort'
import { courseData } from '@/utils/data'
import CourseList from '@/components/common/CourseList'

const IntegratedCoursesPage = () => {
  return (
    <div>
    <CommonBanner image={triningprovider} title="Integrated Courses"/>
    <div className='section-padding-x pb-10'>
      <Title level="title20" className="text-black  py-10">There are a range of integrated courses available. Use the filters provided below to find a course that suits you.
        <br /> <br />
        Couse prices may not include VAT depending on the country. </Title>
      <SearchAndSort />
      <div className='mt-10'>
       <CourseList  courseData={courseData}/>

      </div>
    </div>
      <CommonAds />
    </div>
  )
}

export default IntegratedCoursesPage
