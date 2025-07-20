import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  { id: 1, name: "Best in quality-price", percentage: 66 },
  { id: 2, name: "Fantastic school in sunny Madrid", percentage: 82 },
  { id: 3, name: "Best in quality-price", percentage: 74 },
  { id: 4, name: "Fantastic school in sunny Madrid", percentage: 90 },
  { id: 5, name: "It was a great decision to graduate at Quality Fly", percentage: 58 },
  { id: 6, name: "Great school with a great environment", percentage: 58 },
  { id: 7, name: "Unbeatable place to start your aviation career", percentage: 58 },
];

const Dashboard = () => {
  return (
    <div className="p-6 text-black">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">My Reviews</h1>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Sort by:</span>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Review Cards */}
      <div className="grid gap-4 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border flex items-center justify-between border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={item.percentage}
                text={`${item.percentage}%`}
                styles={buildStyles({
                  pathColor: "#10B981",
                  textColor: "#111827",
                  trailColor: "#E5E7EB",
                  textSize: "24px",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
