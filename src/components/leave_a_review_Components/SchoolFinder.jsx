import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import CommonButton from "../common/CommonButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import ReactPaginate from "react-paginate";

const SchoolFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const axiosPublic = useAxiosPublic();
  const [pageCount, setPageCount] = useState(1);
  const {
    data: schoolsData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["flight-schools", searchTerm, pageCount],
    queryFn: () =>
      axiosPublic.get("/flight-schools/leave-review", {
        params: { page: pageCount, search: searchTerm },
      }),
    keepPreviousData: true,
  });

  // Debounce search to reduce API calls
  useEffect(() => {
    const delayedSearch = debounce(() => {
      setPageCount(1);
      refetch();
    }, 500);

    delayedSearch();

    return () => delayedSearch.cancel();
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Find a School
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search School"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="absolute right-0 top-0 h-full px-4 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 transition-colors"
            onClick={() => {
              setPageCount(1);
              refetch();
            }}
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* School Listings */}
      <div className="space-y-4 mb-8">
        {isLoading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gray-100 rounded-lg animate-pulse"
              >
                <div className="w-16 h-12 bg-gray-200 rounded" />
                <div className="h-6 w-32 bg-gray-200 rounded" />
              </div>
            ))
          : schoolsData?.data?.data?.map((school) => (
              <div
                key={school.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-gray-100 rounded border flex items-center justify-center overflow-hidden">
                    <img
                      src={school?.image}
                      alt={`${school.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to={`/school-profile/${school.id}`}
                    className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 break-words"
                  >
                    {school.name}
                  </Link>
                </div>

                <CommonButton link="/add-your-review" variant="secondary">
                  Add Your Review
                </CommonButton>
              </div>
            ))}
      </div>
      {/* Pagination */}
      <div className="flex">
        <ReactPaginate
          breakLabel="..."
          // nextLabel={<Next />}
          // previousLabel={<Previous />}
          pageCount={schoolsData?.data?.meta?.last_page || 1}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={(event) => {
            setPageCount(event.selected + 1);
            // window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
          previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white rounded-md cursor-pointer xxs:block hidden"
          nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white rounded-md cursor-pointer xxs:block hidden"
          activeLinkClassName="font-[700] bg-Secondary rounded-lg text-white border-none"
          disabledClassName="bg-none cursor-not-allowed"
          breakClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700"
          pageLinkClassName="w-[42px] h-[42px] border-[1px] border-primary flex justify-center items-center text-primary rounded-lg"
          forcePage={pageCount - 1}
        />
      </div>
    </div>
  );
};

export default SchoolFinder;
