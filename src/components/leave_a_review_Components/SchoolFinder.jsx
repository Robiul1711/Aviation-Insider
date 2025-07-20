import React, { useState } from 'react';
import { Search } from 'lucide-react';
import s1 from '../../assets/images/s1.png';
import s2 from '../../assets/images/s2.png';
import { Link } from 'react-router-dom';
const SchoolFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const schools = [
    {
      id: 1,
      name: "Air Alliance Flight Center",
      logo: s1,
    },
    {
      id: 2,
      name: "2FLY",
      logo: s2,
    },
    {
      id: 3,
      name: "Academy Aviation",
      logo: s1,
    },
    {
      id: 4,
      name: "Accademia Del Volo",
      logo: s2,
    },
    {
      id: 5,
      name: "ACS Flight Training",
      logo: s1,
    },
    {
      id: 6,
      name: "Adriana Aviation",
      logo: s2,
    },
    {
      id: 7,
      name: "Advanced Flight Training",
      logo: s1
    },
    {
      id: 8,
      name: "Adventia - European Aviation College",
      logo: s2
    },
    {
      id: 9,
      name: "Aeolus Aviation Academy",
      logo: s1
    },
    {
      id: 10,
      name: "Aerbrava",
      logo: s2
    }
  ];

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = 7; // Based on the pagination shown in the image

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    // Previous button
    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        ‹
      </button>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === i
              ? 'bg-gray-800 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    );

    return buttons;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Find a School</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search School"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* School Listings */}
      <div className="space-y-4 mb-8">
        {filteredSchools.map((school) => (
          <div
            key={school.id}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-12 bg-gray-100 rounded border flex items-center justify-center overflow-hidden">
                <img
                  src={school.logo}
                  alt={`${school.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <Link to="/school-profile" className="text-lg font-medium text-gray-900 hover:text-blue-600">{school.name}</Link>
            </div>
            
            <Link to="/add-your-review" className="px-6 py-2 bg-Secondary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Add Your Review
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-1">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default SchoolFinder;
