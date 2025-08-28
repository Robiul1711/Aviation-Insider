import React from "react";

export const FlightSchoolSkeleton = ({
  count = 10,
  columns = 3,
  className = "",
  showLogo = true,
  showButton = true,
  showRatting = false,
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            md:grid-cols-${columns}
            items-center bg-gray-100 p-5 rounded-xl shadow-sm animate-pulse
          `}
        >
          {/* Left Column */}
          {showLogo && (
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-300 rounded-md" />
              <div className="space-y-2">
                <div className="w-28 sm:w-32 h-4 bg-gray-300 rounded" />
                <div className="w-20 sm:w-24 h-3 bg-gray-200 rounded" />
              </div>
            </div>
          )}

          {/* Middle Column */}
          <div className="flex justify-center sm:justify-start md:justify-center mt-4 sm:mt-0">
            <div className="w-16 sm:w-20 h-4 bg-gray-300 rounded" />
          </div>

          {/* Right Column */}
          {showRatting && (
            <div className="flex justify-end mt-4 sm:mt-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-gray-300" />
            </div>
          )}
          {showButton && (
            <div className="flex justify-end mt-4 sm:mt-0 w-full sm:w-auto">
              <div
                className="px-10 sm:px-14 py-3 sm:py-4 rounded-lg w-full sm:w-auto 
                           text-center text-gray-900 bg-gray-300"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// -----------------------------

export const CourseListSkeleton = ({ count = 3 }) => {
  return (
    <div className="space-y-8 animate-pulse">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-300 rounded-md" />
            <div className="space-y-2">
              <div className="w-24 sm:w-28 h-3 bg-gray-300 rounded" />
              <div className="w-32 sm:w-40 h-4 bg-gray-400 rounded" />
            </div>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-5 gap-4 text-sm font-semibold px-4 pt-4 text-gray-700">
            <div className="h-3 bg-gray-200 rounded w-20" />
            <div className="h-3 bg-gray-200 rounded w-20" />
            <div className="h-3 bg-gray-200 rounded w-20" />
            <div className="h-3 bg-gray-200 rounded w-20" />
            <div className="h-3 bg-gray-200 rounded w-20" />
          </div>

          {/* Courses */}
          <div className="px-4 py-2 space-y-3">
            {[...Array(2)].map((_, idx) => (
              <div
                key={idx}
                className="
                  grid grid-cols-1 gap-2
                  sm:grid-cols-2 md:grid-cols-5 
                  items-start border-t border-gray-100 py-3
                "
              >
                <div className="h-3 bg-gray-300 rounded w-20 sm:w-24" />
                <div className="h-3 bg-gray-200 rounded w-28 sm:w-32" />
                <div className="h-3 bg-gray-200 rounded w-20" />
                <div className="h-3 bg-gray-300 rounded w-16" />
                <div className="h-3 bg-gray-200 rounded w-20" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
