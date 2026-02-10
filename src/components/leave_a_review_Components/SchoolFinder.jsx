import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import CommonButton from "../common/CommonButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import badge from "@/assets/images/badge.png";
import { FlightSchoolSkeleton } from "../common/FlightSchoolSkeleton";
import PaginationComponent from "../common/PaginationComponent";

const SchoolFinder = () => {
  const axiosPublic = useAxiosPublic();
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search); // update only after 500ms
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  const { data: schoolsData, isLoading } = useQuery({
    queryKey: ["flight-schools", debouncedSearch, pageCount],
    queryFn: () =>
      axiosPublic.get("/flight-schools/leave-review", {
        params: { page: pageCount, search: debouncedSearch },
      }),
    keepPreviousData: true,
  });
  // console.log(schoolsData);
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {/* <button
            className="absolute right-0 top-0 h-full px-4 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 transition-colors"
            onClick={() => {
              setPageCount(1);
              refetch();
            }}
          >
          </button> */}
          <Search size={20} className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* School Listings */}
      <div className="space-y-3 mb-8">
        {isLoading ? (
          <>
            <FlightSchoolSkeleton
              count={10}
              columns={3}
              showButton={true}
              showLogo={true}
            />
          </>
        ) : (
          schoolsData?.data?.data?.map((school) => (
            <div
              key={school.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className=" w-14 h-14 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={school?.image}
                    alt={`${school.name} logo`}
                    className="w-full h-full object-contain p-1 transition-transform duration-200 hover:scale-105"
                  />

                 
                </div>

                <Link
                  to={`/school-profile/${school.id}`}
                  className="text-base flex items-center gap-2  font-medium text-gray-900 hover:text-blue-600 break-words"
                >
                  {school.name}
                   {/* Verified Badge */}
                  {school?.is_verified === 1 && (
                    <img
                      src={badge}
                      alt="Verified badge"
                      className="w-5 h-5  drop-shadow-md"
                    />
                  )}
                </Link>
              </div>

              <CommonButton
                link={`/add-your-review/${school.id}?name=${encodeURIComponent(
                  school.name
                )}`}
                variant="secondary"
                className="!px-4 !py-2"
              >
                Add Your Review
              </CommonButton>
            </div>
          ))
        )}
      </div>
      {/* Pagination */}
      <div className="flex">
        <PaginationComponent
          pageCount={schoolsData?.data?.meta?.last_page || 1}
          setPageCount={setPageCount}
          forcePage={pageCount}
        />

        {/* <ReactPaginate
          breakLabel="..."
          pageCount={schoolsData?.data?.meta?.last_page || 1}
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
        /> */}
      </div>
    </div>
  );
};

export default SchoolFinder;
