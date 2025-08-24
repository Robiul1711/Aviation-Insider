import React from "react";

const FlightSchoolSkeleton = ({
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
          className={`grid grid-cols-1 sm:grid-cols-${columns} items-center bg-gray-100 p-5 rounded-xl shadow-sm animate-pulse`}
        >
          {/* Left Column */}
          {showLogo && (
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-gray-300 rounded-md" />
              <div className="space-y-2">
                <div className="w-32 h-4 bg-gray-300 rounded" />
                <div className="w-24 h-3 bg-gray-200 rounded" />
              </div>
            </div>
          )}

          {/* Middle Column */}
          <div className="flex justify-center mt-4 sm:mt-0">
            <div className="w-20 h-4 bg-gray-300 rounded" />
          </div>

          {/* Right Column (button placeholder) */}
          {showRatting && (
            <div className="flex justify-end mt-4 sm:mt-0">
              <div className="w-14 h-14 rounded-full border-4 border-gray-300" />
            </div>
          )}
          {showButton && (
            <div className="flex justify-end mt-4 sm:mt-0">
                <div className=" px-14 py-4 rounded-lg transition-colors duration-200 
                             w-full sm:w-auto text-center text-gray-900 bg-gray-300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightSchoolSkeleton;


