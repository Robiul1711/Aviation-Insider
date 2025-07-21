import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const FirstTimeFlyer = () => {
  return (
    <div>
      <CommonBanner image={image} title="First Time Flyer" />
      <div className="section-padding-x py-10">
        <div className="space-y-5 pb-10">
              <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Commercial Pilot Training Guide</h1>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-gray-700 mb-3">
          Although it is not required to have any flying experience before starting training as a commercial airline pilot, 
          we do recommend you have at least one taster flight to make sure it really is the career for you.
        </p>
        <p className="text-gray-700">
          We also highly recommend you consider gaining your <span className="font-semibold text-blue-600">Class One Medical</span> before committing large sums of money to any flight school. 
          You can find out about the Class One Medical <a href="#" className="text-blue-600 underline">here</a>.
        </p>
      </div>
      
      <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Main Consideration</h2>
        <p className="text-gray-700 mb-3">
          The main factor in deciding which route to take to the flight deck is the manner in which you plan to train.
        </p>
        <div className="p-3 bg-yellow-100 rounded">
          <p className="text-yellow-800 font-medium">
            COVID NOTE: Due to the unpredictable impact the Covid-19 pandemic has had on the aviation industry, 
            we would recommend spreading both the cost and duration of training over a longer period of time.
          </p>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Below we have briefly introduced the impacts of training full-time and part-time to help you decide which route suits you.
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <h3 className="text-lg font-bold text-red-800 mb-3">Full-Time Training</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Increases training continuity</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Reduces total training time</span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Requires large financial commitment upfront</span>
            </li>
            <li className="flex items-start text-gray-700">
              <div className="bg-red-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span>Not possible to work alongside training</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-lg font-bold text-green-800 mb-3">Part-Time Training</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Earn while you train</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Pay-as-you-go financing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Control your training speed</span>
            </li>
            <li className="flex items-start text-gray-700">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span>Requires excellent time management</span>
            </li>
            <li className="flex items-start text-gray-700">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span>Less training continuity</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 italic">
        Consider your personal circumstances, financial situation, and career goals when choosing your training path.
      </div>
    </div>
        </div>
        <Title level="title40" className="text-black text-center">
  How would you like to train?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/full-time-training-options")}
          >
        Full Time
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/training-courses-menu")}
          >
     Part Time
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default FirstTimeFlyer;
