import React, { useState } from "react";
import image from "@/assets/images/Military.png";
import CommonBanner from "../../../components/common/CommonBanner";
import CommonAds from "../../../components/common/CommonAds";
import EuropeDetail from "@/components/selectYourDesired_components/EuropeDetail";
import Title from "@/components/common/Title";
import CommonCourseList from "@/components/common/CommonCourseList";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UKPPLCourses from "@/components/common/UKPPLCourses";
import ReactPaginate from "react-paginate";
const UKPPL = () => {
  const axiosPublic = useAxiosPublic();
  const [pageCount, setPageCount] = useState(1);
  const { data: UKPPL, isLoading } = useQuery({
    queryKey: ["ukppl"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/course-category/details/course/uk-ppl",
        {
          params: {
            page: pageCount,
          },
        }
      );
      return res.data;
    },
  });
  console.log(UKPPL?.data?.flight_schools);
  return (
    <div>
      <CommonBanner image={image} title={UKPPL?.data?.title} />
      <EuropeDetail data={UKPPL?.data} />
      {
        UKPPL?.data?.flight_schools && UKPPL?.data?.flight_schools.length > 0 && (
        <div className="section-padding-x">
          <Title level="title40" className="text-black text-center py-5 md:py-10">
            Flight Training Courses
          </Title>
          <UKPPLCourses data={UKPPL} isLoading={isLoading} />
          {/* Pagination */}
          <div className="flex py-10 justify-center">
            <ReactPaginate
              breakLabel="..."
              pageCount={UKPPL?.data?.meta?.last_page || 1}
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
        </div>
      )
      }
      <CommonAds isShow />
    </div>
  );
};

export default UKPPL;
