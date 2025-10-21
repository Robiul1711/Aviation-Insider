import CommonBanner from "@/components/common/CommonBanner";
import React, { useState } from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import SearchAndSort from "@/components/common/SearchAndSort";
import CourseList from "@/components/common/CourseList";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ModularCourseList from "@/components/common/ModularCourseList";
import PaginationComponent from "@/components/common/PaginationComponent";

const ModularCoursesPage = () => {
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const axiosPublic = useAxiosPublic();
  const { data: ModularCourses, isLoading } = useQuery({
    queryKey: ["ModularCourses", pageCount, search, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/course-category/details/course/modular-course",
        {
          params: {
            page: pageCount,
            search: search,
            sort: sort,
          },
        }
      );
      return res.data;
    },
  });
  // console.log(ModularCourses?.meta);
  return (
    <div>
      <CommonBanner
        image={triningprovider}
        title={ModularCourses?.data?.title}
      />
      <div className="section-padding-x pb-10">
        <Title level="title20" className="text-black  py-10">
          {ModularCourses?.data?.description}
        </Title>
        <SearchAndSort
          searchValue={search}
          onSearchChange={(e) => setSearch(e.target.value)}
          onSearch={() => setPageCount(1)}
          sortValue={sort}
          onSortChange={(e) => setSort(e.target.value)}
        />

        <div className="mt-10">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading courses...</p>
          ) : ModularCourses?.data?.flight_schools?.length > 0 ? (
            <>
              <ModularCourseList
                courseData={ModularCourses?.data}
                isLoading={isLoading}
              />
              <div className="mt-8 flex justify-center">
                <PaginationComponent
                  pageCount={ModularCourses?.meta?.last_page || 1}
                  setPageCount={setPageCount}
                  forcePage={ModularCourses?.meta?.current_page || 1}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg font-medium">
                No courses found. Try a different search.
              </p>
            </div>
          )}
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default ModularCoursesPage;
