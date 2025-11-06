import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import PaginationComponent from "../common/PaginationComponent";
import badge from "@/assets/images/badge.png";
const VarifiedSchoolRatting = () => {
  const [pageCount, setPageCount] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(""); // actual search term when user clicks "Search"

  const axiosPublic = useAxiosPublic();

  // Fetch API data with search + pagination
  const {
    data: verifiedSchools,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["verifiedAllSchools", pageCount, search],
    queryFn: async () => {
      const response = await axiosPublic.get("/flight-schools/verified/all", {
        params: { page: pageCount, search: search || "" },
      });
      return response.data;
    },
    keepPreviousData: true,
  });

  const handleSearch = () => {
    setPageCount(1); // reset to first page on new search
    setSearch(query.trim());
  };

  return (
    <div className="p-6 bg-white">
      {/* Search Input */}
   {
    verifiedSchools?.meta?.total > 0 && (
      <>
  <div className="flex mb-6">
          <div className="relative flex-grow max-w-[600px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search School..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md outline-none "
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
     
      <div className="hidden md:grid grid-cols-4 gap-6 py-4 border-b border-gray-200 mb-6">
        <div className="font-medium text-gray-600">School Logo & Name</div>
        <div className="font-medium text-gray-600">School Base Code</div>
        <div className="font-medium text-gray-600">Country</div>
        <div className="font-medium text-gray-600">Rating</div>
      </div>
      </>

    )
   }
      
 


      {/* Loading/Error states */}
      {isLoading && <p className="text-center py-10">Loading...</p>}
      {error && <p className="text-center text-red-500 py-10">Error loading data.</p>}

      {/* Data Rows */}
      {!isLoading && verifiedSchools?.data?.length > 0 ? (
        <div className="space-y-6">
          {verifiedSchools.data.map((school, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-6 items-center p-4 border rounded-xl bg-[#F3F4F6] border-gray-100"
            >
              {/* Logo & Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                  <img src={school.image} alt="" className="w-full h-full object-cover rounded-lg" />
                </div>
                <Link
                  to={`/school-profile/${school.id}`}
                  className="font-medium text-gray-900 hover:underline flex items-center gap-2"
                >
                  {school.name}
                         {school?.is_verified === 1 && (
                    <img
                      src={badge}
                      alt="Verified badge"
                      className=" w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
                    />
                  )}
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
          <div className="flex justify-center">
            <PaginationComponent
              pageCount={verifiedSchools?.meta?.last_page || 1}
              setPageCount={setPageCount}
              forcePage={pageCount}
            />
          </div>
        </div>
      ) : (
        !isLoading && (
          <p className="text-center py-10 text-gray-500">No schools found for your search.</p>
        )
      )}
    </div>
  );
};

export default VarifiedSchoolRatting;
