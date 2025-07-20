import React from 'react'
import Title from '../common/Title'
import b1 from '@/assets/images/b1.png'
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
const SchoolDetails = () => {
  return (
    <div className='section-padding-x p-6 bg-white'>
        <div className='max-w-6xl mx-auto text-center'>
      <Title level="title32" className="text-black">Quality Fly works in collaboration with several airlines</Title>
      <Title level="title18" className="text-black">Quality Fly maintains strong connections and collaborations with various airlines, helping students gain real-world exposure and better career opportunities in the aviation industry.</Title>

        </div>
        <div className='mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{
            data.map((item) => (
                <div key={item.id} className='bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center border'>
                <img src={item.image} alt={item.title} className='w-full h-20 object-cover rounded-lg mb-4' />
                <h3 className='text-[#111827]'>{item.title}</h3>
                </div>
            ))
}
        </div>
    </div>
  )
}

export default SchoolDetails
