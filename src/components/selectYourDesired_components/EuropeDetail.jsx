import React from 'react'
import Title from '../common/Title'
import { Link } from 'react-router-dom'

const EuropeDetail = ({data}) => {
  return (
    <div className='bg-[#E6E8EC] pt-10  md:pt-16'>
      <Title level="title20" className="text-black text-center section-padding-x px-4">
    {data?.description}
      </Title>
      <div className='mt-10 bg-Secondary-light text-center py-8'>
<Link to='/plus-schools' className='text-white'>Also visit our <span className='text-Primary'>Enhanced Flight Schools</span> page for more detailed profiles to aide in your search: <a href='https://pilot-network.com/plus-schools' className='text-Primary hover:underline'>https://pilot-network.com/plus-schools</a></Link>
      </div>
    </div>
  )
}

export default EuropeDetail
