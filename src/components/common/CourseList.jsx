
import React from "react";
import { Link } from "react-router-dom";


const CourseList = ({ courseData }) => {
  return (
    <div className=" space-y-8">
      {courseData.map((school, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          {/* School Header */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <img src={school.logo} alt={school.school} className="w-16 h-16 object-contain" />
            <div>
              <p className="text-sm text-gray-500">School Name</p>
              <Link className="font-semibold text-lg text-blue-600">{school.school}</Link>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 text-sm font-semibold px-4 pt-4 text-gray-700">
            <div>Course Name</div>
            <div></div>
            <div>Duration</div>
            <div>Price</div>
            <div>Country</div>
          </div>

          {/* Courses */}
          <div className="px-4 py-2 space-y-3">
            {school.courses.map((course, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 md:grid-cols-5 gap-4 items-start border-t border-gray-100 py-2"
              >
                <div className="text-gray-800">{course.name}</div>
                <div className="text-gray-600">{course.details || "—"}</div>
                <div className="text-gray-600">{course.duration || "—"}</div>
                <div className="text-gray-800 font-medium">{course.price}</div>
                <div className="text-gray-600">{school.country}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
