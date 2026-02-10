import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FlightSchoolSkeleton } from "../common/FlightSchoolSkeleton";

const TopTrainingProviders = () => {
  const [pageCount, setPageCount] = useState(1);
  const axiosPublic = useAxiosPublic();
  const {
    data: TopTrainingPro,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["topTrainingProviders", pageCount],
    queryFn: async () => {
      const response = await axiosPublic.get(
        "/reviews/top-rated-training-providers",
        {
          params: { page: pageCount, per_page: 10 }, // ✅ request 5 per page
        }
      );
      return response.data;
    },
  });
  // console.log(TopTrainingPro)
  if (isLoading)
    return (
      <p>
        <FlightSchoolSkeleton showRatting={true} showButton={false} count={5} />
      </p>
    );
  if (error)
    return <p className="text-[#FF0000]">No available data at the moment</p>;
  return (
    <div className="space-y-3">
      {/*  Top Rated Training Providers */}
      {
        !TopTrainingPro?.data || TopTrainingPro?.data.length === 0 ? (
          <p className="text-[#FF0000]">No available data at the moment</p>
        ) : (
          <>
      {TopTrainingPro?.data?.map((item) => (
   <div
  key={item.flight_school_id}
  className="flex items-center justify-between bg-[#F3F4F6] px-2 py-2 rounded-md"
>
  <div className="flex items-center gap-4">
    <img
      src={item.image}
      alt={item.name}
      className="w-12 h-12 object-contain"
    />

    <div className="flex flex-col gap-0.5">
      <Link
        to={`/school-profile/${item.flight_school_id}`}
        className="text-sm sm:text-base font-semibold leading-tight"
      >
        {item.name}
      </Link>

      <p className="text-gray-600 text-xs sm:text-sm">
        {item.total_review_count} reviews
      </p>

      <p className="text-gray-600 font-medium text-xs sm:text-sm">
        Rank: {item.rank}
      </p>
    </div>
  </div>

  <div className="w-10 h-10">
    <CircularProgressbar
      value={item.overall_percentage}
      text={`${item.overall_percentage}%`}
      styles={buildStyles({
        pathColor: "#10B981",
        textColor: "#111827",
        trailColor: "#D1D5DB",
        textSize: "28px",
      })}
    />
  </div>
</div>

      ))}
      {/* Pagination */}
      <div className="flex">
        <ReactPaginate
          breakLabel="..."
          pageCount={TopTrainingPro?.meta?.last_page || 1} // ✅ use backend last_page
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={(event) => {
            setPageCount(event.selected + 1);
          }}
          containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
          previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer xxs:block hidden"
          nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer xxs:block hidden"
          activeLinkClassName="font-[700] bg-Secondary rounded-lg text-white border-none"
          disabledClassName="bg-none cursor-not-allowed"
          breakClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700"
          pageLinkClassName="w-[42px] h-[36px] border-[1px] border-primary flex justify-center items-center text-primary rounded-md"
          forcePage={pageCount - 1}
        />
      </div>
          </>
      )
      }
    </div>
  );
};

export default TopTrainingProviders;
