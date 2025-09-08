import React from 'react'
import Title from '../common/Title'
import b1 from '@/assets/images/b1.png'
import { Link } from 'react-router-dom'
const data = [
    {
        id: 1,
        image: b1   ,
        title: 'European flight training academy is a member of the Ryanair Future Flyer scheme. This is a self funded but Ryanair structured route to first officer.',

    },
    {
        id: 1,
        image: b1   ,
        title: 'European flight training academy is a member of the Ryanair Future Flyer scheme. This is a self funded but Ryanair structured route to first officer.',

    },
    {
        id: 1,
        image: b1   ,
        title: 'European flight training academy is a member of the Ryanair Future Flyer scheme. This is a self funded but Ryanair structured route to first officer.',

    },
    {
        id: 1,
        image: b1   ,
        title: 'European flight training academy is a member of the Ryanair Future Flyer scheme. This is a self funded but Ryanair structured route to first officer.',

    },
    {
        id: 1,
        image: b1   ,
        title: 'European flight training academy is a member of the Ryanair Future Flyer scheme. This is a self funded but Ryanair structured route to first officer.',

    },
    {
        id: 1,
        image: b1   ,
        title: 'European flight training academy is a member of the Ryanair Future Flyer scheme. This is a self funded but Ryanair structured route to first officer.',

    },
]
const SchoolDetails = ({SchoolDetail}) => {
  return (
    <div className='section-padding-x p-6 bg-white'>
        <div className='max-w-6xl mx-auto text-center'>
      <Title level="title32" className="text-black"> {SchoolDetail?.name} works in collaboration with several airlines</Title>
      <Title level="title18" className="text-black">{SchoolDetail?.name} maintains strong connections and collaborations with various airlines, helping students gain real-world exposure and better career opportunities in the aviation industry.</Title>

        </div>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {SchoolDetail?.airline_partners?.map((item) => (
    <Link
      to={item.website_url}
      key={item.id}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
    >
      {/* Logo */}
      <img
        src={item.logo_path}
        alt={item.title}
        className="w-32 h-20 object-contain mb-4"
      />

      {/* Description */}
      <h3
        className="text-[#111827] text-sm md:text-base font-medium leading-relaxed"
        dangerouslySetInnerHTML={{ __html: item.description }}
      ></h3>
    </Link>
  ))}
</div>

    </div>
  )
}

export default SchoolDetails
