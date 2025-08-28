import CommonBanner from '@/components/common/CommonBanner'
import React, { useState } from 'react'
import triningprovider from '@/assets/images/triningprovider.png'
import Title from '@/components/common/Title'
import CommonAds from '@/components/common/CommonAds'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '@/hooks/useAxiosPublic'
import ReactPaginate from 'react-paginate'
import IntrigatedCourseData from '@/components/common/IntrigatedCourseData'

const IntegratedCoursesPage = () => {
  const axiosPublic = useAxiosPublic();
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const { data: IntrigatedCourse, isLoading, error } = useQuery({
    queryKey: ["IntrigatedCourseData", pageCount, search, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/course-category/details/course/integrated-course",
        {
          params: { 
            page: pageCount, 
            search,  
            sort,    
          },
        }
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  return (
    <div>
      <CommonBanner image={triningprovider} title={IntrigatedCourse?.data?.title} />
      <div className="section-padding-x pb-10">
        <Title level="title20" className="text-black py-10">
          {IntrigatedCourse?.data?.description}
        </Title>

        {/* ✅ Search & Sort Inputs */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPageCount(1); // reset to page 1 on search
            }}
            className="border px-4 py-2 rounded-lg w-full md:w-1/3"
          />

          {/* Sort Dropdown */}
          {/* <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPageCount(1); // reset to page 1 on sort
            }}
            className="border px-4 py-2 rounded-lg w-full md:w-1/4"
          >
            <option value="">Sort by</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select> */}
        </div>

        {/* ✅ Course List */}
        <div className="mt-10">
          <IntrigatedCourseData
            courseData={IntrigatedCourse?.data}
            isLoading={isLoading}
            error={error}
          />

          {/* ✅ Pagination */}
          <div className="flex py-10">
            <ReactPaginate
              breakLabel="..."
              pageCount={IntrigatedCourse?.data?.meta?.last_page || 1}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              onPageChange={(event) => setPageCount(event.selected + 1)}
              containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
              previousLabel="Previous"
              nextLabel="Next"
              previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
              nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
              activeClassName="font-[700] bg-Secondary rounded-lg border-none"
              activeLinkClassName="text-white"
              disabledClassName="opacity-50 cursor-not-allowed"
              breakClassName="md:px-4 px-2 py-2 text-sm font-medium"
              pageClassName="mx-1 cursor-pointer"
              pageLinkClassName="w-[42px] h-[42px] border border-primary flex justify-center items-center text-black rounded-lg hover:bg-Secondary hover:text-white transition-colors"
              forcePage={pageCount - 1}
            />
          </div>
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default IntegratedCoursesPage;
