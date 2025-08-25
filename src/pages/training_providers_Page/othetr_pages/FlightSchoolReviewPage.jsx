import CommonBanner from "@/components/common/CommonBanner";
import React, { useState } from "react";
import triningprovider from "@/assets/images/flightschool.png";
import CommonAds from "@/components/common/CommonAds";
import TopratedProviders from "@/components/trainingProvidersAllComponents/TopratedProviders";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { FlightSchoolSkeleton } from "@/components/common/FlightSchoolSkeleton";

const FlightSchoolReviewPage = () => {
  const [pageCount, setPageCount] = useState(1);
  const axiosPublic = useAxiosPublic();

  const {
    data: AllflightSchools,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["AllflightSchools", pageCount],
    queryFn: async () => {
      const response = await axiosPublic.get("/reviews/all-flight-schools", {
        params: { page: pageCount },
      });
      return response.data;
    },
    keepPreviousData: true, // ✅ keeps old data when switching pages
  });

  const flightSchools = AllflightSchools?.data || [];
  const meta = AllflightSchools?.meta || {};

  return (
    <div>
      <CommonBanner image={triningprovider} title="Flight School Review" />
      <div className="section-padding-x pb-10">
        <div className="mt-10">
          {isLoading ? (
            <FlightSchoolSkeleton />
          ) : (
            <TopratedProviders data={flightSchools} />
          )}

          {/* ✅ Show pagination if we have meta (even when fetching) */}
          {meta?.last_page > 1 && (
            <div className="flex mt-10 justify-center relative">
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
      </div>
      <CommonAds />
    </div>
  );
};

export default FlightSchoolReviewPage;
