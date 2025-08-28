import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["my-reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/my-flight-schools/reviews");
      return res.data;
    },
  })
  return (
    <div className=" text-black">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">My Reviews</h1>

        {/* <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Sort by:</span>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </div> */}
      </div>

      {/* Review Cards */}
      <div className="grid gap-4 ">
        {data?.data?.map((item) => (
          <Link 
            // to={`/school-profile/${item.flight_school_id}`}
            key={item.id}
            className="bg-white border flex items-center justify-between border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
          
            <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{item.flight_school_name}</h2>
            <h2 className="text-sm font-semibold text-gray-800">{item.message}</h2>

            </div>
            <div className="w-12 h-12">
              <CircularProgressbar
                value={item.rating}
                text={`${item.rating}%`}
                styles={buildStyles({
                  pathColor: "#10B981",
                  textColor: "#111827",
                  trailColor: "#E5E7EB",
                  textSize: "24px",
                })}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
