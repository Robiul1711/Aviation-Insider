import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";

const TopratedProviders = ({ data }) => {
  return (
    <div className="space-y-4 ">
      {data?.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 sm:grid-cols-3 items-center bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition"
        >
          {/* Left Column */}
          <div className="flex items-center gap-5">
            <img
              src={item.user_avatar || item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.message}
              </h3>
              <p className="text-sm text-gray-500">{item.flight_school_name}</p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex justify-center sm:justify-center mt-4 sm:mt-0">
            {dayjs(item.created_at).format("DD/MM/YY")}
          </div>

          {/* Right Column */}
          <div className="flex justify-end mt-4 sm:mt-0">
            <div className="w-14 h-14">
              <CircularProgressbar
                value={item.rating}
                text={`${item.rating}%`}
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
