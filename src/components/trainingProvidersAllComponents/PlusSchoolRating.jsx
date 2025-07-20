import { Search } from 'lucide-react';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PlusSchoolRating = () => {
  const schools = [
    {
      logo: "🛩️",
      name: "Air Alliance Flight Center",
      baseCode: "EDGS",
      country: "Germany",

    },
    {
      logo: "✈️",
      name: "2FLY",
      baseCode: "LEAX",
      country: "Spain",

    },
    {
      logo: "🎓",
      name: "Academy Aviation",
      baseCode: "EGSX",
      country: "United Kingdom",
  
    },
  ];

  return (
    <div className="p-6 bg-white">

      {/* Header Row */}
      <div className="grid grid-cols-3 gap-6 py-4 border-b border-gray-200 mb-6">
        <div className="font-medium text-gray-600">School Logo & Name</div>
        <div className="font-medium text-gray-600">School Base Code</div>
        <div className="font-medium text-gray-600">Country</div>
      </div>

      {/* Data Rows */}
      <div className="space-y-6">
        {schools.map((school, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-6 items-center p-4 border rounded-xl bg-[#F3F4F6] border-gray-100 last:border-b-0"
          >
            {/* Logo & Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                {school.logo}
              </div>
              <h3 className="font-medium text-gray-900">{school.name}</h3>
            </div>

            {/* Base Code */}
            <div className="text-gray-700 font-medium">
              {school.baseCode}
            </div>

            {/* Country */}
            <div className="text-gray-600">{school.country}</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PlusSchoolRating;

