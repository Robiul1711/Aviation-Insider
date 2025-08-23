import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const VarifiedSchoolRatting = () => {
  const [pageCount, setPageCount] = useState(1);
  const axiosPublic = useAxiosPublic();
  const {
    data: verifiedSchools,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["verifiedAllSchools", pageCount],
    queryFn: async () => {
      const response = await axiosPublic.get("/flight-schools/verified/all", {
        params: { page: pageCount },
      });
      return response.data;
    },
  });
  console.log("Verified Schools Data:", verifiedSchools?.data);

  return (
    <div className="p-6 bg-white">
      {/* Search Input */}
      <div className="mb-6">
        <div className="flex">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search School..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            onClick={() => console.log("Search triggered:", query)}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Header Row */}
      <div className="hidden md:grid grid-cols-4 gap-6 py-4 border-b border-gray-200 mb-6">
        <div className="font-medium text-gray-600">School Logo & Name</div>
        <div className="font-medium text-gray-600">School Base Code</div>
        <div className="font-medium text-gray-600">Country</div>
        <div className="font-medium text-gray-600">Rating</div>
      </div>

      {/* Data Rows */}
      <div className="space-y-6">
        {verifiedSchools?.data?.map((school, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-6 items-center p-4 border rounded-xl bg-[#F3F4F6] border-gray-100"
          >
            {/* Logo & Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                <img src={school.image} alt="" />
                {/* {school.logo} */}
              </div>
              <Link
                to={`/school-profile/${school.id}`}
                className="font-medium text-gray-900"
              >
                {school.name}
              </Link>
            </div>

            {/* Base Code */}
            <div className="text-gray-700 font-medium">{school.base_code}</div>

            {/* Country */}
            <div className="text-gray-600">{school.country}</div>

            {/* Rating */}
            <div className="w-14 h-14">
              <CircularProgressbar
                value={school.rating}
                text={`${school.rating}%`}
                styles={buildStyles({
                  pathColor: "#10B981",
                  textColor: "#111827",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex">
          <ReactPaginate
            breakLabel="..."
            // nextLabel={<Next />}
            // previousLabel={<Previous />}
            pageCount={verifiedSchools?.meta?.last_page || 1}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={(event) => {
              setPageCount(event.selected + 1);
              // window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
            previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer xxs:block hidden"
            nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer xxs:block hidden"
            activeLinkClassName="font-[700] bg-Secondary rounded-lg text-white border-none"
            disabledClassName="bg-none cursor-not-allowed"
            breakClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700"
            pageLinkClassName="w-[42px] h-[42px] border-[1px] border-primary flex justify-center items-center text-primary rounded-lg"
            forcePage={pageCount - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default VarifiedSchoolRatting;
