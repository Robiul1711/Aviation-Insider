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
    <div className="flex flex-wrap gap-6 items-center justify-between">
      {/* Search Inputs */}
      <div className="flex flex-wrap gap-4 items-center">
        <input
          type="text"
          value={schoolValue}
          onChange={onSchoolChange}
          placeholder="Search School..."
          className="w-94 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={courseValue}
          onChange={onCourseChange}
          placeholder="Search Course..."
          className="w-94 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSearch}
          className="bg-gray-900 text-white p-2 rounded-md hover:bg-gray-700 transition"
        >
          <FiSearch size={18} />
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <select
          value={sortValue}
          onChange={onSortChange}
          className="border border-gray-300 rounded-md w-48 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
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
