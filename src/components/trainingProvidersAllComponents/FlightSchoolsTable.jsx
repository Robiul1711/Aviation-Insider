import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import FlightSchoolSkeleton from "../common/FlightSchoolSkeleton";

const FlightSchoolsTable = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["flightSchools", pageCount, search], // include search in queryKey
    queryFn: async () => {
      const response = await axiosPublic.get("/flight-schools/all", {
        params: {
          page: pageCount,
          search: search || undefined, // send search if not empty
        },
      });
      return response.data;
    },
    keepPreviousData: true, // Smooth transitions between pages
  });

  // Extract data and meta from response
const schools = data?.data || [];
const meta = data?.meta || {};

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPageCount(1); // reset to first page on search
  };

  return (
    <div className="md:p-6 bg-white">
      {/* 🔍 Search Input */}
      <div className="relative mb-6 max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search schools, base code, or country..."
          value={search}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl 
             shadow-sm outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 transition"
        />
      </div>

      {/* Header (hidden on mobile) */}
      <div className="hidden sm:grid grid-cols-4 gap-6 py-4 border-b border-gray-200 mb-6 text-sm">
        <div className="font-medium text-gray-600">School Logo & Name</div>
        <div className="font-medium text-gray-600">School Base Code</div>
        <div className="font-medium text-gray-600">Country</div>
        <div></div>
      </div>

      {/* School Rows */}
      <div className="space-y-4">
        {schools.length > 0 ? (
          schools.map((school, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 items-center 
                         p-4 border border-gray-100 rounded-xl hover:shadow-md 
                         transition duration-200"
            >
              {/* Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/48"; // Fallback image
                    }}
                  />
                </div>
                <Link
                  to={`/school-profile/${school.id}`}
                  className="text-blue-600 hover:underline"
                >
                  <h3 className="font-medium text-gray-900">{school.name}</h3>
                </Link>
              </div>

              {/* Base Code */}
              <div className="text-gray-700 font-medium">
                <span className="sm:hidden font-semibold text-sm text-gray-500">
                  Base Code:{" "}
                </span>
                {school.base_code}
              </div>

              {/* Country */}
              <div className="text-gray-600">
                <span className="sm:hidden font-semibold text-sm text-gray-500">
                  Country:{" "}
                </span>
                {school.country}
              </div>

              {/* Read More Button */}
              <div className="flex justify-start sm:justify-end">
                <Link
                  to={`/school-profile/${school.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium 
                             px-4 py-2 rounded-lg transition-colors duration-200 
                             w-full sm:w-auto text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <FlightSchoolSkeleton count={10} columns={3} showButton={true} />
        )}
      </div>

      {/* Pagination - Only show if we have multiple pages AND search is empty */}
      {meta.last_page > 1 && !search && (
        <div className="flex justify-center mt-8">
          <ReactPaginate
            breakLabel="..."
            pageCount={meta.last_page || 1}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={(event) => {
              setPageCount(event.selected + 1);
            }}
            containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
            previousLabel="Previous"
            nextLabel="Next"
            previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
            nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
            activeClassName="font-[700] bg-Secondary rounded-lg border-none"
            activeLinkClassName="text-white" // ✅ white when active
            disabledClassName="opacity-50 cursor-not-allowed"
            breakClassName="md:px-4 px-2 py-2 text-sm font-medium"
            pageClassName="mx-1 cursor-pointer"
            pageLinkClassName="w-[42px] h-[42px] border border-primary flex justify-center items-center text-black rounded-lg hover:bg-Secondary hover:text-white transition-colors"
            forcePage={pageCount - 1}
          />
        </div>
      )}
    </div>
  );
};

export default FlightSchoolsTable;
