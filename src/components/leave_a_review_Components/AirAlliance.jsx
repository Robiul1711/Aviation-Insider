import React from 'react'
import Title from '../common/Title'
import { useLocation, useParams } from 'react-router-dom';

const AirAlliance = () => {
    const { id } = useParams(); // school.id
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name"); // school.name
  return (
    <div>
      <Title level="title56" className="text-black text-center mb-10">
        {name}
      </Title>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Thank you for taking the time to leave a review for an ATO
        </h1>
        
        <p className="text-gray-600  mb-6 leading-relaxed">
          Your review will help future pilots to make better decisions about which ATO to choose to suit their needs. If you have completed training at more than one ATO please come back and provide a review for each one.
        </p>
        
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-3">
            To leave a review you must:
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 ">Have completed your course at this ATO</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 ">Hold an account with Pilot Network</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-3">
            To leave a review you must not:
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 ">Work for or be involved with managing this ATO</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 ">Have had your training terminated by this ATO</span>
            </li>
          </ul>
        </div>
        
        <p className=" text-gray-500 leading-relaxed">
          By submitting a review, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800 underline">
            terms and conditions
          </a>
          {' '}and agree to the above conditions. Any breach of these conditions will lead to your review being removed from Pilot Network and the potential removal of your account.
        </p>
      </div>
    </div>


  )
}

export default AirAlliance
