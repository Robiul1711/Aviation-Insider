import React from "react";
import Title from "../common/Title";
import dayjs from "dayjs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ReviewsForSchool = ({ SchoolDetail }) => {
  return (
    <div className="section-padding-x md:py-20">
      <Title level="title32" className="mb-8">
        Reviews for this School
      </Title>

      <div className="space-y-5">
        {SchoolDetail?.review?.reviewed_users?.map((item) => (
          <div
            key={item.user_id}
            className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {/* Left Column */}
            <div className="flex items-center gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.flight_school_name || "Aviation School"}
                </p>
              </div>
            </div>

            {/* Middle Column - Date */}
            <div className="flex justify-center sm:justify-center">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                {dayjs(item.created_at).format("DD MMM YYYY")}
              </span>
            </div>

            {/* Right Column - Rating */}
            <div className="flex justify-center sm:justify-end">
              <div className="w-14 h-14">
                <CircularProgressbar
                  value={item.percentage}
                  text={`${item.percentage}%`}
                  styles={buildStyles({
                    pathColor: "#10B981", // green
                    textColor: "#111827",
                    trailColor: "#E5E7EB",
                  })}
                />
              </div>
            </div>
          </div>
        ))}

        {(!SchoolDetail?.review?.reviewed_users ||
          SchoolDetail?.review?.reviewed_users.length === 0) && (
          <p className="text-gray-500 text-sm">
            No reviews available for this school.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewsForSchool;
