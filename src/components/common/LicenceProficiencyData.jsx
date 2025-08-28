import React from "react";
import { Link } from "react-router-dom";
import { FlightSchoolSkeleton } from "./FlightSchoolSkeleton";

const LicenceProficiencyData = ({ courseData , isLoading, error}) => {
   if (isLoading) return <p className=" mb-10"><FlightSchoolSkeleton  showRatting={true} showButton={false} count={5}  /></p>;
  if (error) return <p className=" mb-10">Error fetching data</p>
  return (
    <div className="space-y-8">
   {courseData?.flight_schools?.map((school, index) => (
        <div
        key={index}
        className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <img
              src={school.logo}
              alt={school.school}
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="text-sm text-gray-500">School Name</p>
              <Link
                to={`/school-profile/${school.id}`}
                className="font-semibold text-lg text-blue-600 hover:underline"
              >
                {school?.school}
              </Link>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-5 gap-4 text-sm font-semibold px-4 pt-4 text-gray-700">
            <div>Course Name</div>
            <div>Details</div>
            <div>Duration</div>
            <div>Price</div>
            <div>Country</div>
          </div>


          <div className="px-4 py-2 space-y-3">
            {school.courses.map((course, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 items-start border-t border-gray-100 py-3"
              >
                <div>
                  <p className="text-xs text-gray-500 md:hidden">Course Name</p>
                  <p className="text-gray-800">{course.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 md:hidden">Details</p>
                  <p className="text-gray-600">{course.details || "—"}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 md:hidden">Duration</p>
                  <p className="text-gray-600">{course.duration || "—"}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 md:hidden">Price</p>
                  <p className="text-gray-800 font-medium">{course.price}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 md:hidden">Country</p>
                  <p className="text-gray-600">{school.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LicenceProficiencyData;
