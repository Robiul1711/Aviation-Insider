import React from "react";
import { FaStar } from "react-icons/fa6";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CommonAds from "../common/CommonAds";
import OtherCommonLinks from "../common/OtherCommonLinks";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import dummy from "@/assets/images/dummy.webp";
const StarRow = ({ label, value }) => (
  <div className="flex flex-col items-center bg-white border p-4 rounded-lg min-w-[180px]">
    <p className="text-gray-700 font-medium mb-2">{label}</p>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-xl ${i < value ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  </div>
);

const formatLabel = (key) => {
  // First, replace underscores with spaces
  let formatted = key.replace(/_/g, ' ');
  
  // Remove rating suffix if present
  formatted = formatted.replace(/\s+rating$/, '');
  
  // Custom mapping for specific terms
  const termMap = {
    'sop': 'SOP Quality',
    'theory': 'Theoretical',
    'practical': 'Practical',
    'aircraft': 'Aircraft',
    'simulator': 'Simulator',
    'facilities': 'Facilities',
    'communication': 'Communication',
    'customer service': 'Customer Service',
    'atmosphere': 'Atmosphere',
    'graduation support': 'Graduation Support',
    'student support': 'Student Support',
    'social life': 'Social Life',
    'age': 'Age',
    'reliability': 'Reliability',
    'maintenance': 'Maintenance',
    'availability': 'Availability',
    'quality instruction': 'Instruction Quality',
    'instructors per student': 'Instructors Per Student',
    'extra tuition support': 'Extra Tuition Support',
    'value for money': 'Value For Money',
    'learning material': 'Learning Materials',
    'classroom overall': 'Classroom Overall',
    'class size': 'Class Size',
    'class life balance': 'Work-Life Balance',
    'school manual': 'School Manuals',
    'lesson regularity': 'Lesson Regularity',
    'lesson scheduling': 'Lesson Scheduling',
   
  };
  
  // Apply custom mappings
  Object.entries(termMap).forEach(([original, replacement]) => {
    formatted = formatted.replace(original, replacement);
  });
  
  // Capitalize first letter of each word
  formatted = formatted.replace(/\b\w/g, l => l.toUpperCase());
  
  return formatted;
};

const Section = ({ title, percentage, items }) => {
  // Convert the object to an array of {label, value} pairs
  const itemArray = Object.entries(items).map(([key, value]) => ({
    label: formatLabel(key),
    value: value
  }));

  return (
    <div className="mb-10">
      <div className="bg-gray-100 px-4 py-2 rounded-t-md font-semibold text-gray-700 text-lg">
        {title}
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6 border rounded-b-md p-4 ">
        <div className="w-16 h-16">
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              textColor: "#1D4ED8",
              pathColor: "#22C55E",
              trailColor: "#E5E7EB",
              textSize: "20px",
            })}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {itemArray.map((item, index) => (
            <StarRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ReviewViewPage = () => {
  
  const { user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;
  const isViewActive = currentPath === "/review-view";
  const isEditActive = currentPath === "/add-your-review";

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['user-reviews', id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/user/reviews/${id}`);
      return response.data;
    }
  });

if (isLoading)
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
    </div>
  );

if (error) {
  return (
    <div className="section-padding-x py-16 h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600">
          We couldn’t load the review at the moment. Please try again later.
        </p>
      </div>
    </div>
  );
}

  const reviewData = data?.data;

  return (
    <>
      <div className="flex section-padding-x py-16 gap-10">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex items-center gap-6 mb-6 border-b pb-2 font-bold">
            <Link
              to="/review-view"
              className={`${isViewActive ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-blue-500"}`}
            >
              View
            </Link>
         
            <Link
              to={`/edit-review/${id}`}
              className={`${isEditActive ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"}`}
            >
              Edit
            </Link>
          </div>

          {/* Submitted Info */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={reviewData?.submitted_by?.avatar || dummy}
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
            <p className="text-sm text-gray-700">
              Submitted by <span className="text-blue-600 font-medium">{reviewData?.submitted_by?.name}</span> {reviewData?.submitted_by?.submitted_at}
            </p>
          </div>

          {/* Overall Rating */}
          <div className="mb-10">
            <div className="bg-gray-100 px-4 py-2 rounded-t-md font-semibold text-gray-700 text-lg">
              This Review Overall Rating
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6 border rounded-b-md p-4">
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={reviewData?.overall_percentage}
                  text={`${Math.round(reviewData?.overall_percentage)}%`}
                  styles={buildStyles({
                    textColor: "#1D4ED8",
                    pathColor: "#22C55E",
                    trailColor: "#E5E7EB",
                    textSize: "18px",
                  })}
                />
              </div>
              <div>
                <p className="text-gray-700 text-lg font-medium mt-2">
                  {reviewData?.headline}
                </p>
                <p className="text-gray-600 mt-2">
                  {reviewData?.message}
                </p>
              </div>
            </div>
          </div>

          {/* Section Ratings */}
          {reviewData?.sections?.general && (
            <Section
              title="General"
              percentage={reviewData.sections.general.percentage}
              items={reviewData.sections.general.items}
            />
          )}
          
          {reviewData?.sections?.aircraft && (
            <Section
              title="Aircraft"
              percentage={reviewData.sections.aircraft.percentage}
              items={reviewData.sections.aircraft.items}
            />
          )}
          
          {reviewData?.sections?.simulator && (
            <Section
              title="Simulators"
              percentage={reviewData.sections.simulator.percentage}
              items={reviewData.sections.simulator.items}
            />
          )}
          
          {reviewData?.sections?.theory && (
            <Section
              title="Theoretical Training"
              percentage={reviewData.sections.theory.percentage}
              items={reviewData.sections.theory.items}
            />
          )}
          
          {reviewData?.sections?.practical && (
            <Section
              title="Practical Training"
              percentage={reviewData.sections.practical.percentage}
              items={reviewData.sections.practical.items}
            />
          )}
        </div>
        <OtherCommonLinks className="flex flex-col gap-5" />
      </div>

      <CommonAds />
    </>
  );
};

export default ReviewViewPage;