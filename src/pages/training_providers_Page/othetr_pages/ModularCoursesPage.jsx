import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import SearchAndSort from "@/components/common/SearchAndSort";
import { courseData } from "@/utils/data";
import CourseList from "@/components/common/CourseList";

const ModularCoursesPage = () => {
  return (
    <div>
      <CommonBanner image={triningprovider} title="Modular Courses" />
      <div className="section-padding-x pb-10">
        <Title level="title20" className="text-black  py-10">
          The range of modular courses available are extensive. Once you are
          aware which courses to be looking at use the filter tools below to
          find a course that suits you.
          <br /> <br />
          Couse prices may not include VAT depending on the country.
          <br /> <br />
          These tables require us to hold valid prices for courses. If you would
          like to look to see if a specific school provides a specific course
          visit the schools profiles -{" "}
          <span className="text-blue-500">click here.</span>
        </Title>
        <SearchAndSort />
        <div className="mt-10">
          <CourseList courseData={courseData} />
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default ModularCoursesPage;
