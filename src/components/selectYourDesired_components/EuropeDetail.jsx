import React from 'react'
import Title from '../common/Title'
import { Link } from 'react-router-dom'

const EuropeDetail = () => {
  return (
    <div className='bg-[#E6E8EC] pt-10  md:pt-16'>
      <Title level="title20" className="text-black text-center section-padding-x px-4">
        To fly recreationally in Europe you need to hold a PPL. This allows you to fly with non-paying passengers in a light aircraft. In addition to a flying test there are a set of written exams which will introduce you to the world of flying. At a minimum the training should last 45 hours, however the average is often a little longer than this.
 <br /> <br />
The PPL is a very versatile licence which can have additional ratings added to it to allow you to fly in other conditions, such as poor weather and even fly at night.
 <br /> <br />
Below we have listed all the schools in Europe which provide training for the PPL Licence.  
      </Title>
      <div className='mt-10 bg-Secondary-light text-center py-8'>
<Link to='/plus-schools' className='text-white'>Also visit our <span className='text-Primary'>Enhanced Flight Schools</span> page for more detailed profiles to aide in your search: <a href='https://pilot-network.com/plus-schools' className='text-Primary hover:underline'>https://pilot-network.com/plus-schools</a></Link>
      </div>
    </div>
  )
}

export default EuropeDetail
