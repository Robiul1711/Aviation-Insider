import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchAndSort = ({
  schoolValue = "",
  courseValue = "",
  onSchoolChange,
  onCourseChange,
  onSearch,
  sortValue,
  onSortChange,
  sortOptions = ["Low to High", "High to Low"],
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6">
      {/* Search Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <input
          type="text"
          value={schoolValue}
          onChange={onSchoolChange}
          placeholder="Search School..."
          className="w-full sm:w-72 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={courseValue}
          onChange={onCourseChange}
          placeholder="Search Course..."
          className="w-full sm:w-72 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSearch}
          className="bg-gray-900 text-white p-2 rounded-md hover:bg-gray-700 transition self-center sm:self-auto"
        >
          <FiSearch size={18} />
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <span className="text-sm text-gray-600 w-[70px]">Sort by:</span>
        <select
          value={sortValue}
          onChange={onSortChange}
          className="w-full sm:w-48 border border-gray-300 rounded-md py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {sortOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndSort;
