import React from "react";
import { FlightSchoolSkeleton } from "./FlightSchoolSkeleton";

export default function UKPPLCourses({ data, isLoading }) {
  if (isLoading) {
    return <div><FlightSchoolSkeleton  showRatting={false} showButton={false} count={5}  /></div>;
  }

  if (!data?.data?.flight_schools) {
    return <div>No course data available</div>;
  }

  const TableRow = ({ school }) => {
    // Get the first course (assuming each school has at least one UK PPL course)
    const course = school.courses && school.courses.length > 0 ? school.courses[0] : {};
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4 border-b border-gray-200 px-4">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">
            School Name
          </div>
          <div className="text-sm text-gray-900">{school.school}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">
            Course Name
          </div>
          <div className="text-sm text-gray-900">{course.name || "-"}</div>
          <div className="text-sm text-gray-600 mt-1">{course.details || "-"}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Duration</div>
          <div className="text-sm text-gray-900">{course.duration ? `${course.duration} weeks` : "-"}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Price</div>
          <div className="text-sm text-gray-900">{course.price ? `$${course.price.toLocaleString()}` : "-"}</div>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Country</div>
          <div className="text-sm text-gray-900">{school.country}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto bg-white">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Header (hidden on mobile, visible on md+) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 bg-gray-50 py-3 px-4 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-700">School Name</div>
          <div className="text-sm font-medium text-gray-700">Course Name</div>
          <div className="text-sm font-medium text-gray-700">Duration</div>
          <div className="text-sm font-medium text-gray-700">Price</div>
          <div className="text-sm font-medium text-gray-700">Country</div>
        </div>

        {/* Data Rows */}
        {data.data.flight_schools.map((school) => (
          <TableRow key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}