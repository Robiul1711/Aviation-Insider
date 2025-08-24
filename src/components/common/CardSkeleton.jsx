import React from "react";

const CardSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full shadow-lg bg-[#F3F4F6] rounded animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-40 bg-gray-300 rounded-t" />

          {/* Text placeholder */}
          <div className="p-4 space-y-3">
            <div className="h-5 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
