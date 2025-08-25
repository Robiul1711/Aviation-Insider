import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { useState } from "react";

import { Link } from "react-router-dom";
import { FlightSchoolSkeleton } from "../common/FlightSchoolSkeleton";

const EnhancedTrainingProviders = () => {
  const [pageCount, setPageCount] = useState(1);
  const axiosPublic = useAxiosPublic();

  const { data: fetchedData, isLoading, error } = useQuery({
    queryKey: ["enhancedTrainingProviders", pageCount],
    queryFn: async () => {
      const response = await axiosPublic.get(
        "/reviews/top-rated-training-providers",
        {
          params: { page: pageCount, per_page: 5 }, // ✅ request 5 per page
        }
      );
      return response.data;
    },
    keepPreviousData: true, // keeps old data while fetching new page
  });

  if (isLoading) return <p><FlightSchoolSkeleton showRatting={true} showButton={false} count={5} /></p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="space-y-4">
      {fetchedData?.data?.map((item) => (
        <div
          key={item.flight_school_id}
          className="flex items-center justify-between bg-[#F3F4F6] p-4 rounded-md"
        >
          <div className="flex items-center gap-8">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col gap-1">
              <Link to={`/school-profile/${item.flight_school_id}`} className="sm:text-xl font-bold">{item.name}</Link>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.total_review_count} reviews
              </p>
            </div>
          </div>
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar
              value={item.overall_percentage}
              text={`${item.overall_percentage}%`}
              styles={buildStyles({
                pathColor: "#10B981", // ✅ circle color
                textColor: "#111827", // ✅ text color
                trailColor: "#D1D5DB", // ✅ background circle
              })}
            />
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex">
        <ReactPaginate
          breakLabel="..."
          pageCount={fetchedData?.meta?.last_page || 1} // ✅ use backend last_page
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
  );
};

export default EnhancedTrainingProviders;
