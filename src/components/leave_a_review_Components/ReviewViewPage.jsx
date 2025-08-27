import React, { use } from "react";
import { FaStar } from "react-icons/fa6";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CommonAds from "../common/CommonAds";
import OtherCommonLinks from "../common/OtherCommonLinks";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";

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

const Section = ({ title, items }) => (
  <div className="mb-10">
    <div className="bg-gray-100 px-4 py-2 rounded-t-md font-semibold text-gray-700 text-lg">
      {title}
    </div>
    <div className="flex flex-col md:flex-row items-start gap-6 border rounded-b-md p-4">
      <div className="w-16 h-16">
        <CircularProgressbar
          value={97}
          text={`97%`}
          styles={buildStyles({
            textColor: "#1D4ED8",
            pathColor: "#22C55E",
            trailColor: "#E5E7EB",
            textSize: "20px",
        
          })}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <StarRow key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  </div>
);

const ReviewViewPage = () => {

  const {user}=useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const isViewActive = currentPath === "/review-view"; // Adjust path as needed
  const isEditActive = currentPath === "/add-your-review";

  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const {data: review} = useQuery({
    queryKey: ['review', id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/reviews`);
      return response.data;
    }
  })


console.log(review);

  return (
    <>
    <div className="flex section-padding-x py-16 gap-10">
    <div className="p-6 max-w-7xl mx-auto ">
      {/* Tab Navigation */}
      <div className="flex items-center gap-6 mb-6 border-b pb-2 font-bold">
        <Link
          to="/review-view"
          className={` ${
            isViewActive ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-gray-600"
          }`}
        >
          View
        </Link>
        <Link
          to="/add-your-review"
          className={` ${
            isEditActive ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-gray-600"
          }`}
        >
          Edit
        </Link>
      </div>

      {/* Submitted Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full w-10 h-10"
        />
        <p className="text-sm text-gray-700">
          Submitted by <span className="text-blue-600 font-medium">Ekramul A</span> on Sun, 13/07/2025 - 02:42
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
              value={97}
              text={`97%`}
              styles={buildStyles({
                textColor: "#1D4ED8",
                pathColor: "#22C55E",
                trailColor: "#E5E7EB",
                textSize: "18px",
              })}
            />
          </div>
          <p className="text-gray-700 text-lg font-medium mt-2">
            Nice & Attractive
          </p>
        </div>
      </div>

      {/* Section Ratings */}
      <Section
        title="General"
        items={[
          { label: "Facilities", value: 4 },
          { label: "Communication", value: 1 },
          { label: "Customer Service", value: 3 },
        ]}
      />
      <Section
        title="Aircraft"
        items={[{ label: "Aircraft Age", value: 4 }]}
      />
      <Section
        title="Simulators"
        items={[{ label: "Simulator Reliability", value: 4 }]}
      />
      <Section
        title="Theoretical Training"
        items={[{ label: "Instructors Per Student", value: 1 }]}
      />
      <Section
        title="Practical Training"
        items={[{ label: "School Manuals", value: 4 }]}
      />
    </div>
    <OtherCommonLinks className="flex flex-col gap-5" />
    </div>

    <CommonAds />
    </>
  );
};

export default ReviewViewPage;
