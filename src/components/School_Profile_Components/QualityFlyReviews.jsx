import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EnhancedTrainingProviders from "../faq_Components/EnhancedTrainingProviders";

const reviews = [
  "best in quality-price",
  "Fantastic school in sunny Madrid",
  "It was a great decision to graduate at Quality Fly",
  "Great school with a great environment",
  "Unbeatable place to start your aviation career",
  "Unbeatable place to start your aviation career",
  "Unbeatable place to start your aviation career",
];



const Progress = () => (
  <div className="w-10 h-10">
    <CircularProgressbar
      value={97}
      text={`97%`}
      styles={buildStyles({
        textSize: "28px",
        pathColor: "#00c49a",
        textColor: "#00c49a",
        trailColor: "#e6e6e6",
      })}
    />
  </div>
);

export default function QualityFlyReviews() {
  return (
    <div className="p-6 section-padding-x bg-gray-50 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Top Reviews for Quality Fly</h2>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
              >
                <p className="text-sm md:text-base">{review}</p>
                <Progress />
              </div>
            ))}
          </div>
          <button className="mt-4 px-4 py-2 bg-Secondary-light text-white rounded hover:bg-Secondary">
            All Reviews
          </button>
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
          {/* <button className="mt-4 px-4 py-2 bg-Secondary-light text-white rounded hover:bg-Secondary">
            Find Out More
          </button> */}
        </div>
      </div>
    </div>
  );
}
