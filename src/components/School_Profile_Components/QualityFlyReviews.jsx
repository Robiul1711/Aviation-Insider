import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EnhancedTrainingProviders from "../faq_Components/EnhancedTrainingProviders";
import { Link } from "react-router-dom";

const Progress = ({ percentage }) => (
  <div className="w-10 h-10">
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
    <div className="p-6 section-padding-x bg-gray-50 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2">
            {console.log(SchoolDetail?.review?.top_reviews)}
          <h2 className="text-2xl font-bold mb-4">Top Reviews for {SchoolDetail?.name}</h2>
          <div className="space-y-4">
            {SchoolDetail?.review?.top_reviews
              ?.slice(0, 8) // 👈 show only 3 reviews
              .map((review, index) => (
                <Link to={`/users-reviews/${review?.review_id}`}
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
                >
                  <p className="text-sm md:text-base">{review?.message}</p>
                  <Progress percentage={review?.percentage} />
                </Link>
              ))}
          </div>
          {/* <a href="/reviews" className="mt-4 px-4 py-2 bg-Secondary-light text-white rounded hover:bg-Secondary">
            All Reviews
          </a> */}
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Enhanced Training Providers</h2>
          <p className="text-sm text-gray-500 mb-4">
            Training providers require a minimum of 3 reviews to be ranked
          </p>
          <div className="space-y-4">
            <EnhancedTrainingProviders />
          </div>
        </div>
      </div>
    </div>
  );
}
