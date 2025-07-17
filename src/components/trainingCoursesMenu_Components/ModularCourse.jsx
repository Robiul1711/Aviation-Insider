import React, { useState } from "react";
import Title from "@/components/common/Title";
import SearchAndSort from "@/components/common/SearchAndSort";
import CourseList from "../common/CourseList";
import { courseData } from "@/utils/data";

const ModularCourse = () => {
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [sort, setSort] = useState("Low to High");

  const handleSearch = () => {
    console.log("Searching for:", school, course, sort);
  };

  return (
    <div className="text-black">
      {/* Title */}
      <Title level="title40" className="text-black mb-6">
        We recommend you study a modular course.
      </Title>

      {/* Content Section */}
      <div className="space-y-4 sm:text-lg text-base leading-relaxed">
        <p>
          Modular courses require considerable planning as the emphasis is on
          you to organise each phase of your training.
        </p>
        <p>
          We have produced an Excel spreadsheet to help you plan and budget your
          flight training. Email us at{" "}
          <span className="font-semibold">contact@pilot-network.com</span> to
          get it.
        </p>
        <p>
          We recommend you read our advice page on how to choose the right
          school for you.
        </p>
        <p>
          Scroll down to view a list of all the modular courses available. You
          should be looking initially for a PPL course.
        </p>
        <p>
          If you would like to explore the other routes available to you{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            click here
          </a>
          .
        </p>
      </div>

      {/* Search and Sort Section */}
      <div className="pt-16">
        <SearchAndSort
          schoolValue={school}
          onSchoolChange={(e) => setSchool(e.target.value)}
          courseValue={course}
          onCourseChange={(e) => setCourse(e.target.value)}
          onSearch={handleSearch}
          sortValue={sort}
          onSortChange={(e) => setSort(e.target.value)}
        />
      </div>
      <div className="pt-16">
        <CourseList  courseData={courseData}/>
      </div>
    </div>
  );
};

export default ModularCourse;
