import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EnhancedTrainingProviders from "../faq_Components/EnhancedTrainingProviders";
import { Link } from "react-router-dom";
import dummy from "@/assets/images/dummy.webp";

const Progress = ({ percentage }) => (
  <div className="w-10 h-10 sm:w-12 sm:h-12">
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textSize: "28px",
        pathColor: "#00c49a",
        textColor: "#00c49a",
        trailColor: "#e6e6e6",
      })}
    />
  </div>
);

export default function QualityFlyReviews({ SchoolDetail }) {
  return (
    <div className="section-padding-x bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {/* ===== Left Section (Reviews) ===== */}
        <div className="md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-gray-800">
            Top Reviews for {SchoolDetail?.name}
          </h2>

          <div className="space-y-6">
            {SchoolDetail?.review?.top_reviews
              ?.slice(0, 8)
              .map((review) => (
                <div
                  key={review?.review_id}
                  className="group flex flex-col gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* ===== Header (Avatar + Info + Progress) ===== */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                    {/* User Info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <img
                        src={review?.avatar || dummy}
                        alt={review?.name || "User"}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0 border-2 border-gray-200 group-hover:border-Secondary transition-colors"
                      />
                      <div className="min-w-0 flex-1">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-Secondary transition-colors truncate">
                          {review?.name || "Anonymous User"}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
                          {review?.headline || "No headline provided"}
                        </p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="w-full sm:w-auto">
                      <Progress percentage={review?.percentage || 0} />
                    </div>
                  </div>

                  {/* ===== Message ===== */}
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors">
                      {review?.message || "No review message available."}
                    </p>
                  </div>

                  {/* ===== Action ===== */}
                  <div className="flex justify-end">
                    <Link
                      to={`/users-reviews/${review?.review_id}`}
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-Secondary-light text-white text-sm sm:text-base font-medium rounded-lg shadow hover:bg-Secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ===== Right Section (Enhanced Providers) ===== */}
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">
            Verified Training Providers
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-5">
            Training providers require a minimum of 3 reviews to be ranked.
          </p>
          <div className="space-y-4">
            <EnhancedTrainingProviders />
          </div>
        </div>
      </div>
    </div>
  );
}
