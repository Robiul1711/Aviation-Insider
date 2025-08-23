import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchAndSort = ({
  searchValue = "",
  onSearchChange,
  onSearch,
  sortValue,
  onSortChange,
  sortOptions = ["Low to High", "High to Low"],
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6">
      {/* Search Input */}
      <div className="flex gap-2 w-full sm:w-auto">
        <input
          type="text"
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search School or Course..."
          className="w-full sm:w-80 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onSearch}
          className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
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
