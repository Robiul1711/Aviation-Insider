import { Search } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FlightSchoolsTable = () => {
  const schools = [
    {
      logo: "🛩️",
      name: "Air Alliance Flight Center",
      baseCode: "EDGS",
      country: "Germany"
    },
    {
      logo: "✈️",
      name: "2FLY",
      baseCode: "LEAX",
      country: "Spain"
    },
    {
      logo: "🎓",
      name: "Academy Aviation",
      baseCode: "EGSX",
      country: "United Kingdom"
    }
  ];

  return (
    <div className="p-6 bg-white">
      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      </div>

      {/* Header (hidden on mobile) */}
      <div className="hidden sm:grid grid-cols-4 gap-6 py-4 border-b border-gray-200 mb-6">
        <div className="font-medium text-gray-600">School Logo & Name</div>
        <div className="font-medium text-gray-600">School Base Code</div>
        <div className="font-medium text-gray-600">Country</div>
        <div></div>
      </div>

      {/* School Rows */}
      <div className="space-y-6">
        {schools.map((school, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center py-4 border-b border-gray-100 last:border-b-0"
          >
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                {school.logo}
              </div>
              <Link to={`/school-profile`} className="text-blue-600 hover:underline">
                <h3 className="font-medium text-gray-900">{school.name}</h3>
              </Link>
            </div>

            {/* Base Code */}
            <div className="text-gray-700 font-medium sm:text-center">
              <span className="sm:hidden font-semibold text-sm text-gray-500">Base Code: </span>
              {school.baseCode}
            </div>

            {/* Country */}
            <div className="text-gray-600 sm:text-center">
              <span className="sm:hidden font-semibold text-sm text-gray-500">Country: </span>
              {school.country}
            </div>

            {/* Read More Button */}
            <div className="flex justify-start sm:justify-end">
              <button className="bg-Secondary-light hover:bg-Secondary text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 w-full sm:w-auto">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSchoolsTable;
