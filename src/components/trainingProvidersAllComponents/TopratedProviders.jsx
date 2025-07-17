import React from "react";
import TrainingProviders from "@/assets/images/TrainingProviders.png";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  { id: 1, name: "Flight Performance Training LTD", percentage: 66, image: TrainingProviders, review: "24", category: "EGKA" },
  { id: 2, name: "Euro Flight Training", percentage: 82, image: TrainingProviders, review: "31", category: "EGKA" },
  { id: 3, name: "SkyWings", percentage: 74, image: TrainingProviders, review: "18", category: "EGKA" },
  { id: 4, name: "FlyElite", percentage: 90, image: TrainingProviders, review: "45", category: "EGKA" },
  { id: 5, name: "AeroMax", percentage: 58, image: TrainingProviders, review: "12", category: "EGKA" },
];

const TopratedProviders = () => {
  return (
    <div className="space-y-4 pb-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 sm:grid-cols-3 items-center bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition"
        >
          {/* Left Column */}
          <div className="flex items-center gap-5">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex justify-center sm:justify-center mt-4 sm:mt-0">
            <p className=""> <span className=" font-bold">({item.review}) </span> reviews</p>
          </div>

          {/* Right Column */}
          <div className="flex justify-end mt-4 sm:mt-0">
            <div className="w-14 h-14">
              <CircularProgressbar
                value={item.percentage}
                text={`${item.percentage}%`}
                styles={buildStyles({
                  pathColor: "#10B981",
                  textColor: "#111827",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopratedProviders;
