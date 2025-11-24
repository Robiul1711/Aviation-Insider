import React, { useEffect, useState } from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import DynamicCourseDetail from "./DynamicCourseDetail";
import ReactPaginate from "react-paginate";
import { CourseListSkeleton } from "@/components/common/FlightSchoolSkeleton";
import { useAuth } from "@/hooks/useAuth";

const TrainingCoursesMenu = () => {
  const [pageCount, setPageCount] = useState("");
  const axiosPublic = useAxiosPublic();
  const [categoryId, setCategoryId] = useState(null);
  const [activeCategory, setActiveCategory] = useState({ id: null, title: "" });
  const { catSearch, sortBy, setCatSearch } = useAuth();

  // Fetch all course categories
  const {
    data: categoryResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axiosPublic.get("/course-categories"),
  });

  const allCategories = categoryResponse?.data?.data || [];

  // Set default category when data is loaded
  useEffect(() => {
    if (allCategories.length && !activeCategory.id) {
      const first = allCategories[0];
      setActiveCategory({ id: first.id, title: first.title });
      setCategoryId(first.id);
    }
  }, [allCategories]);

  // Fetch category details based on active category ID

  const { data: detailResponse } = useQuery({
    queryKey: ["category-details", categoryId, pageCount, catSearch, sortBy],
    queryFn: () =>
      axiosPublic.get(`/course-category/details/${categoryId}`, {
        params: {
          page: pageCount,
          search: catSearch || undefined, // only committed search
          sort: sortBy || undefined,
        },
      }),
    enabled: !!categoryId,
  });
  return (
    <div>
      <CommonBanner
        image={image}
        title={activeCategory.title || "Training Courses"}
      />

  <div className="section-padding-x py-16 w-full flex flex-col lg:flex-row justify-between gap-10">

  {/* Sidebar */}
  <div className="w-full lg:w-[22%] flex flex-row lg:flex-col flex-wrap gap-3">
    {allCategories.map((category) => (
      <button
        key={category.id}
        onClick={() => {
          setActiveCategory({ id: category.id, title: category.title });
          setCategoryId(category.id);
          setCatSearch("");
        }}
        className={`px-6 py-3 w-[48%] lg:w-full text-center rounded-md text-white text-sm font-semibold duration-300
          ${
            activeCategory.title === category.title
              ? "bg-Secondary shadow-md scale-[1.02]"
              : "bg-Secondary-light hover:bg-Secondary/80"
          }
        `}
      >
        {category.title}
      </button>
    ))}
  </div>

  {/* Main Content */}
  <div className="w-full lg:w-[78%]">
    {isLoading ? (
      <CourseListSkeleton count={3} />
    ) : error ? (
      <div className="text-red-500 text-lg">Failed to load course details.</div>
    ) : (
      <>
        <DynamicCourseDetail
          details={detailResponse}
          categoryId={categoryId}
          categoryTitle={activeCategory.title}
        />

        {/* Pagination */}
        <div className="flex mt-10 justify-center">
          <ReactPaginate
            breakLabel="..."
            pageCount={detailResponse?.data?.meta?.last_page || 1}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={(event) => setPageCount(event.selected + 1)}
            containerClassName="flex items-center gap-2 flex-wrap"
            previousLabel="Prev"
            nextLabel="Next"
            previousClassName="px-3 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
            nextClassName="px-3 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
            activeClassName="bg-Secondary text-white rounded-md"
            pageClassName="cursor-pointer"
            pageLinkClassName="w-9 h-9 border border-primary flex justify-center items-center rounded-md hover:bg-Secondary hover:text-white transition"
            forcePage={pageCount - 1}
          />
        </div>
      </>
    )}
  </div>
</div>


      <CommonAds isShow />
    </div>
  );
};

export default TrainingCoursesMenu;
