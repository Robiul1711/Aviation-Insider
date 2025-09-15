import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function ReviewSubmitForm({ data }) {
  const { register, watch, setValue } = useFormContext();

  console.log("Incoming Data:", data?.data?.course_types);

  // ✅ Static course options (not from API)
  const courseOptions = [
    { id: 1, label: "Integrated" },
    { id: 2, label: "MPL" },
    { id: 3, label: "Additional Flight Instructor Ratings/Restrictions" },
    { id: 4, label: "Online Resource" },
    { id: 5, label: "Private Pilots Licence (PPL)" },
    { id: 6, label: "Trial Lesson" },
    { id: 7, label: "Night VFR or Night Rating (NR)" },
    { id: 8, label: "Hourly Rate Aircraft Hire" },
    { id: 9, label: "Hour Building Packages" },
    { id: 10, label: "ATPL Theory Residential (ATPL-R)" },
    { id: 11, label: "ATPL Theory Distance Learning (ATPL-D)" },
    { id: 12, label: "Multi Engine Instrument Rating (ME-IR)" },
    { id: 13, label: "Multi Engine Piston Rating (MEP)" },
    { id: 14, label: "Single Engine Instrument Rating (SE-IR)" },
    { id: 15, label: "Combined Advanced Training (CPL/ME-IR)" },
    { id: 16, label: "Commercial Pilots Licence (CPL)" },
    { id: 17, label: "Standalone Jet Orientation Course (JOC)" },
    { id: 18, label: "Combined Multi Crew Cooperation Course and Jet Orientation Course (MCC/JOC)" },
    { id: 19, label: "Multi Crew Co-Operation Course (MCC)" },
    { id: 20, label: "Airline Pilot Standard (APS)" },
    { id: 21, label: "Advanced Upset, Prevention and Recovery Training (A-UPRT)" },
    { id: 22, label: "Flight Instructor Rating (FIC)" },
    { id: 23, label: "Aerobatic Rating" },
    { id: 24, label: "Renewal/Revalidation" },
    { id: 25, label: "Simulator Hire" },
    { id: 26, label: "Type Specific Training (TR)" },
    { id: 27, label: "Airline Simulator Assessment Preparation" },
    { id: 28, label: "Fast-Track Training Courses" },
    { id: 29, label: "Licence Proficiency Check (LPC)" },
  ];

  const selectedCourses = watch("course_type_id") || [];

  const handleCourseChange = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setValue(
        "course_type_id",
        selectedCourses.filter((id) => id !== courseId)
      );
    } else {
      setValue("course_type_id", [...selectedCourses, courseId]);
    }
  };

  // ✅ Prefill message + course IDs if available
  useEffect(() => {
    if (data?.data) {
      if (data.data.message) {
        setValue("message", data.data.message);
      }
      if (data.data.course_types) {
        // map API course_types into IDs
        const normalized = data.data.course_types.map((c) => c.id);
        console.log("Normalized course IDs:", normalized);
        setValue("course_type_id", normalized);
      }
    }
  }, [data, setValue]);

  return (
    <div className="border rounded-md mt-5 md:mt-10 p-4 md:p-6">
      <div className="bg-gray-100 px-4 py-3 mb-6 rounded-sm">
        <h2 className="text-lg font-medium text-gray-800">
          Section 4 – Your Review
        </h2>
      </div>
      <div className="pb-5">
        <p>
          You now have the opportunity to write about your experience at this
          ATO. A balanced review of both positive and negative aspects of your
          training will be the most beneficial for future students. Pilot
          Network welcomes constructive criticism. You could talk about:
        </p>
        <ul className="mt-5 space-y-1 list-disc list-inside">
          <li>What you studied and when/where and how long it took.</li>
          <li>The facilities, airport, aircraft and simulators.</li>
          <li>The instructors generally and mention your favourites.</li>
          <li>Constructively criticise the ATO.</li>
          <li>Where you stayed during training.</li>
          <li>
            If you were successful in finding employment, and what support you
            received.
          </li>
          <li>3 positive and 3 negative parts of this ATO.</li>
        </ul>
      </div>
      <div className="space-y-6">
        {/* Review Text Area */}
        <div>
          <label className="block font-medium text-gray-800 mb-3">
            Write your review
          </label>
          <textarea
            {...register("message")}
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Write your review here..."
          />
        </div>

        {/* Course Type Section */}
        <div>
          <h3 className="font-medium text-gray-800 mb-4">Course Type</h3>
          <div className="space-y-3">
            {courseOptions.map((course) => (
              <label
                key={course.id}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(course.id)}
                  onChange={() => handleCourseChange(course.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">{course.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
