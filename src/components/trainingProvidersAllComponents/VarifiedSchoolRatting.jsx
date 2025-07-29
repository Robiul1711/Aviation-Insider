import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const VarifiedSchoolRatting = () => {
  const [query, setQuery] = useState("");

  const schools = [
    {
      logo: "🛩️",
      name: "Air Alliance Flight Center",
      baseCode: "EDGS",
      country: "Germany",
      percentage: 92,
    },
    {
      logo: "✈️",
      name: "2FLY",
      baseCode: "LEAX",
      country: "Spain",
      percentage: 84,
    },
    {
      logo: "🎓",
      name: "Academy Aviation",
      baseCode: "EGSX",
      country: "United Kingdom",
      percentage: 77,
    },
  ];

  const filteredSchools = schools.filter((school) =>
    [school.name, school.baseCode, school.country]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="p-6 bg-white">
      {/* Search Input */}
   <div className="mb-6">
  <div className="flex">
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="Search School..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
    <button
      onClick={() => console.log('Search triggered:', query)}
      className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
    >
      Search
    </button>
  </div>
</div>


      {/* Header Row */}
      <div className="hidden md:grid grid-cols-4 gap-6 py-4 border-b border-gray-200 mb-6">
        <div className="font-medium text-gray-600">School Logo & Name</div>
        <div className="font-medium text-gray-600">School Base Code</div>
        <div className="font-medium text-gray-600">Country</div>
        <div className="font-medium text-gray-600">Rating</div>
      </div>

      {/* Data Rows */}
      <div className="space-y-6">
        {filteredSchools.map((school, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-6 items-center p-4 border rounded-xl bg-[#F3F4F6] border-gray-100"
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

            {/* Rating */}
            <div className="w-14 h-14">
              <CircularProgressbar
                value={school.percentage}
                text={`${school.percentage}%`}
                styles={buildStyles({
                  pathColor: "#10B981",
                  textColor: "#111827",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>
          </div>
        ))}

        {filteredSchools.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No schools found.</p>
        )}
      </div>
    </div>
  );
};

export default VarifiedSchoolRatting;
