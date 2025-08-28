import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import SearchAndSort from "@/components/common/SearchAndSort";
import CourseList from "@/components/common/CourseList";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ModularCourseList from "@/components/common/ModularCourseList";

const ModularCoursesPage = () => {
  const axiosPublic = useAxiosPublic();
  const {data:ModularCourses,isLoading} = useQuery({
    queryKey: ["ModularCourses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/course-category/details/course/modular-course");
      return res.data;
    },
  })
  return (
    <div>
      <CommonBanner image={triningprovider} title={ModularCourses?.data?.title} />
      <div className="section-padding-x pb-10">
        <Title level="title20" className="text-black  py-10">
          {ModularCourses?.data?.description}
        </Title>
        <SearchAndSort />
        <div className="mt-10">
          <ModularCourseList courseData={ModularCourses?.data} />
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default ModularCoursesPage;
