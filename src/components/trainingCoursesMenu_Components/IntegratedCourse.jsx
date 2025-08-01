import Title from "@/components/common/Title";
import SearchAndSort from "@/components/common/SearchAndSort";
import CourseList from "../common/CourseList";
import { Link } from "react-router-dom";

const IntegratedCourse = ({details}) => {
    const courseData = details?.data?.data?.flight_schools;
  return (
    <div className="text-black">
      {/* Title */}
      <Title level="title40" className="text-black mb-6">
      We recommend you consider an integrated course.
      </Title>

      {/* Content Section */}
      <div className="space-y-4 sm:text-lg text-base leading-relaxed">
        <p>
    Pilot Network has compiled a list of courses available to you. Deciding which school or course is best for you is a difficult decision.

        </p>
        <p>
         We recommend you <span className="font-semibold text-blue-500"> read our advice page </span> on how to choose the right school for you.

        </p>
        <p>
          If you would like to explore the other routes available to you <Link to="/contact" className="font-semibold text-blue-500">click here</Link>. Course prices may not include VAT depending on the country.
        </p>
       
      </div>

      {/* Search and Sort Section */}
      <div className="pt-16">
        <SearchAndSort
          schoolValue=""
          courseValue=""
          onSchoolChange={() => {}}
          onCourseChange={() => {}}
          onSearch={() => {}}
          sortValue=""
          onSortChange={() => {}}
        />
      </div>
      <div className="pt-16">
        <CourseList  courseData={courseData}/>
      </div>
    </div>
  );
};

export default IntegratedCourse;

