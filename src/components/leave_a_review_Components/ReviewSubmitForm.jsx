import React, { useState } from 'react';

export default function ReviewSubmitForm() {
  const [reviewText, setReviewText] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courseOptions = [
  { id: 'integrated', label: 'Integrated' },
  { id: 'mpl', label: 'MPL' },
  { id: 'additional-flight', label: 'Additional Flight Instructor Ratings/Restrictions' },
  { id: 'online-resource', label: 'Online Resource' },
  { id: 'private-pilots', label: 'Private Pilots Licence (PPL)' },
  { id: 'trial-lesson', label: 'Trial Lesson' },
  { id: 'night-vfr', label: 'Night VFR or Night Rating (NR)' },
  { id: 'hourly-rate', label: 'Hourly Rate Aircraft Hire' },
  { id: 'hour-building', label: 'Hour Building Packages' },
  { id: 'atpl-residential', label: 'ATPL Theory Residential (ATPL-R)' },
  { id: 'atpl-distance', label: 'ATPL Theory Distance Learning (ATPL-D)' },
  { id: 'multi-engine-instrument', label: 'Multi Engine Instrument Rating (ME-IR)' },
  { id: 'multi-engine-piston', label: 'Multi Engine Piston Rating (MEP)' },
  { id: 'single-engine-instrument', label: 'Single Engine Instrument Rating (SE-IR)' },
  { id: 'combined-cpl-meir', label: 'Combined Advanced Training (CPL/ME-IR)' },
  { id: 'cpl', label: 'Commercial Pilots Licence (CPL)' },
  { id: 'joc', label: 'Standalone Jet Orientation Course (JOC)' },
  { id: 'mcc-joc', label: 'Combined Multi Crew Cooperation Course and Jet Orientation Course (MCC/JOC)' },
  { id: 'mcc', label: 'Multi Crew Co-Operation Course (MCC)' },
  { id: 'aps', label: 'Airline Pilot Standard (APS)' },
  { id: 'auprt', label: 'Advanced Upset, Prevention and Recovery Training (A-UPRT)' },
  { id: 'fic', label: 'Flight Instructor Rating (FIC)' },
  { id: 'aerobatic', label: 'Aerobatic Rating' },
  { id: 'renewal-revalidation', label: 'Renewal/Revalidation' },
  { id: 'simulator-hire', label: 'Simulator Hire' },
  { id: 'type-specific-training', label: 'Type Specific Training (TR)' },
  { id: 'sim-assessment', label: 'Airline Simulator Assessment Preparation' },
  { id: 'fast-track', label: 'Fast-Track Training Courses' },
  { id: 'lpc', label: 'Licence Proficiency Check (LPC)' },
];


  const handleCourseChange = (courseId) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  return (
    <div className="border rounded-md mt-10 p-6 ">
      <div className="bg-gray-100 px-4 py-3 mb-6 rounded-sm">
        <h2 className="text-lg font-medium text-gray-800">Section 4 – Your Review</h2>
      </div>

      <div className="space-y-6">
        {/* Review Text Area */}
        <div>
          <label className="block  font-medium text-gray-800 mb-3">
            Write your review
          </label>
          <textarea
            value={reviewText}
            onChange={handleReviewChange}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder=""
          />
        </div>

        {/* Course Type Section */}
        <div>
          <h3 className=" font-medium text-gray-800 mb-4">
            Course Type
          </h3>
          <div className="space-y-3">
            {courseOptions.map((course) => (
              <label key={course.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course.id)}
                  onChange={() => handleCourseChange(course.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className=" text-gray-700">{course.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className='py-5'>
        <p>You now have the opportunity to write about your experience at this ATO. A balanced review of both positive and negative aspects of your training will be the most beneficial for future students. Pilot Network welcomes constructive criticism. You could talk about:</p>

        <ul className='mt-5 space-y-1 list-disc list-inside'>
          <li className=''>What you studied and when/where and how long it took.</li>
          <li className=''>The facilities, airport, aircraft and simulators.</li>
          <li className=''>The instructors generally and mention your favourites.</li>
          <li className=''>Constructively criticise the ATO.</li>
          <li className=''>Where you stayed during training.</li>
          <li className=''>If you were successful in finding employment, and what support you received.</li>
          <li className=''>3 positive and 3 negative parts of this ATO..</li>
        </ul>
      </div>
    </div>
  );
}
