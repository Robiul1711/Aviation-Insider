import React from "react";
import Title from "@/components/common/Title";
import SearchAndSort from "@/components/common/SearchAndSort";
import CourseList from "../common/CourseList";
import { courseData } from "@/utils/data";
import { Link } from "react-router-dom";

const ModularFastTrack = () => {

  return (
    <div className="text-black">
      {/* Title */}
      <Title level="title40" className="text-black mb-6">
     We recommend you consider a modular fast track course.
      </Title>

      {/* Content Section */}
      <div className="space-y-4 sm:text-lg text-base leading-relaxed">
        <p>
   ilot Network has compiled a list of courses available to you. Deciding which school or course is best for you is a difficult decision.

        </p>
        <p>
We recommend you read our advice page on how to choose the right school for you.

        </p>
        <p>
      If you would like to explore the other routes available to you <Link to="/contact" className="font-semibold text-blue-500">click here</Link>
        </p>
         
      </div>

      {/* Search and Sort Section */}
      <div className="pt-16">
        
        <SearchAndSort
         
        />
      </div>
      <div className="pt-10">
                <Title level="title40" className="text-black mb-6">Flight Training Courses</Title>
        <CourseList  courseData={courseData}/>
      </div>
    </div>
  );
};

export default ModularFastTrack;

