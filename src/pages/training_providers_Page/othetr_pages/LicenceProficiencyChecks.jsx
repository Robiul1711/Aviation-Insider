import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'
import triningprovider from '@/assets/images/licence.png'
import Title from '@/components/common/Title'
import CommonAds from '@/components/common/CommonAds'
import { courseData } from '@/utils/data'
import CourseList from '@/components/common/CourseList'
import { Search } from 'lucide-react'

const LicenceProficiencyChecks = () => {
  return (
    <div>
    <CommonBanner image={triningprovider} title="Licence Proficiency Checks"/>
    <div className='section-padding-x'>
      <Title level="title20" className="text-black  py-10">The LPC is a form of annual recurrent training which includes ground training and full flight simulator elements. During this training the pilot is expected to demonstrate adherence to Stand Operation Procedures [SOPS], Crew Resource Management [CRM], situation awareness and Threat Error Management skills. The LPC will also cover abnormal and emergency situations which will require the crew to work together in order to safely operate the aircraft.
</Title>
<div className='mb-8 flex items-center gap-4'>
  <div className='relative w-full '>
  <input type="text" name="" id="" placeholder='Search School...' className='w-full h-10 px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500' />
<Search className='absolute right-4 top-1/2 transform -translate-y-1/2' />
  </div>
  <div className='relative w-full '>
  <input type="text" name="" id="" placeholder='Search Course...' className='w-full h-10 px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500' />
<Search className='absolute right-4 top-1/2 transform -translate-y-1/2' />
  </div>
</div>
     <CourseList  courseData={courseData}/>
    </div>
      <CommonAds />
    </div>
  )
}

export default LicenceProficiencyChecks

