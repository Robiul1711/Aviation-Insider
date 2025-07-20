import React from "react";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const TopratedProviders = ({ data}) => {
  return (
    <div className="space-y-4 ">
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
