import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const PilotwithPreviousExperience = () => {
  return (
    <div>
      <CommonBanner image={image} title="Pilot with Previous Experience" />
      <div className="section-padding-x py-10">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Flight Training Options Comparison</h1>
      
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-gray-700 mb-2">
          If you started an integrated course you may receive a discount for the previous flying experience you hold, 
          however often it is not equal to the amount of money you have already invested.
        </p>
        <p className="text-gray-700">
          This means that following a modular route may be more suited to you as you will be able to continue 
          to build on the experience or tenures you already hold and not find yourself paying to repeat training 
          you have already completed.
        </p>
      </div>
      
      <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
        <p className="text-gray-700 font-medium mb-2">
          It is a common misconception that modular training takes longer than integrated training. 
          The speed at which you train on a modular course depends on how you plan to train and fund the course.
        </p>
        <p className="text-gray-700">
          With a modular course you are able to train and work at the same time, although this will take longer 
          it may make financing training easier. Modular training provides the opportunity to train both full-time 
          and part-time or a mixture.
        </p>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Below we have briefly outlined some of the positives of training full-time or part-time:
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-lg font-bold text-green-800 mb-3">Full-Time Training</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">Will take less time</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">Better training continuity</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">More 1 to 1 time with instructors</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
          <h3 className="text-lg font-bold text-purple-800 mb-3">Part-Time Training</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-gray-700">Spread training cost over time</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-gray-700">Able to work alongside training</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              <span className="text-gray-700">You control your speed of training</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Consider your personal circumstances and goals when choosing between training options.
        </p>
      </div>
    </div>
        <Title level="title40" className="text-black text-center mt-5">
          How do you plan to train?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/modular-fast-track-training")}
          >
            Full Time
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/find-the-right-course")}
          >
            Part Time
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default PilotwithPreviousExperience;
