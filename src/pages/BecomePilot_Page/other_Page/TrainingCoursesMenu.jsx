import React, { useEffect, useState } from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import DynamicCourseDetail from "./DynamicCourseDetail";
import ReactPaginate from "react-paginate";
import { CourseListSkeleton } from "@/components/common/FlightSchoolSkeleton";

const TrainingCoursesMenu = () => {
  const [pageCount, setPageCount] = useState("");
  const axiosPublic = useAxiosPublic();
  const [categoryId, setCategoryId] = useState(null);
  const [activeCategory, setActiveCategory] = useState({ id: null, title: "" });

  // Fetch all course categories
  const { data: categoryResponse } = useQuery({
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
  const {
    data: detailResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category-details", categoryId, pageCount],
    queryFn: () =>
      axiosPublic.get(
        `/course-category/details/${categoryId}`,
        { params: { page: pageCount } }
      ),
    enabled: !!categoryId,
    onError: (err) => console.error("Error fetching details:", err),
  });
  return (
    <div>
      <CommonBanner
        image={image}
        title={activeCategory.title || "Training Courses"}
      />

      <div className="section-padding-x py-16 w-full flex justify-between gap-12">
        {/* Sidebar */}
        <div className="w-[20%] flex flex-col gap-5">
          {allCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory({ id: category.id, title: category.title });
                setCategoryId(category.id);
              }}
              className={`px-10 py-3 rounded-md text-white text-center font-semibold duration-300 ${
                activeCategory.title === category.title
                  ? "bg-Secondary shadow-md scale-[1.03]"
                  : "bg-Secondary-light hover:bg-Secondary/80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-[80%]">
          {isLoading ? (
            <div >
             <CourseListSkeleton count={3} />
            </div>
          ) : error ? (
            <div className="text-red-500 text-lg">
              Failed to load course details.
            </div>
          ) : (
            <>
              <DynamicCourseDetail
                details={detailResponse}
                categoryId={categoryId}
                categoryTitle={activeCategory.title}
              />
              <div className="flex mt-10">
                <ReactPaginate
                  breakLabel="..."
                  pageCount={detailResponse?.data?.meta?.last_page || 1}
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
            </>
          )}
        </div>
      </div>

      <CommonAds isShow />
    </div>
  );
};

export default TrainingCoursesMenu;
