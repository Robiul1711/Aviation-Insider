import CourseList from "@/components/common/CourseList";
import SearchAndSort from "@/components/common/SearchAndSort";
import Title from "@/components/common/Title";
import React, { useState } from "react";

const DynamicCourseDetail = ({ details, categoryId, categoryTitle }) => {
  const courseData = details?.data?.data?.flight_schools || [];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Low to High");
  const handleSearch = () => {

    console.log("Searching for:", search);
  };

  if (!details?.data) return null;
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-Primary">
        {details.data.title || "Course Title"}
      </h2>

      <p className="text-gray-700">{details.data.description}</p>

      {/* Show different things based on categoryId */}
      {categoryId === 1 && <p>✈️ {categoryTitle}</p>}
      {categoryId === 2 && <p>⚡{categoryTitle}</p>}
      {categoryId === 3 && <p>🌍 {categoryTitle}</p>}
      {categoryId === 4 && <p> {categoryTitle}</p>}
      {categoryId === 5 && <p>{categoryTitle}</p>}
      {categoryId === 6 && <p>{categoryTitle}</p>}
      {categoryId === 7 && <p>{categoryTitle}</p>}
      {categoryId === 8 && <p>{categoryTitle}</p>}
      {categoryId === 9 && <p>{categoryTitle}</p>}

      <div className="text-black">
        {/* Title */}
        <Title level="title40" className="text-black mb-6">
          {details?.data?.data?.title}.
        </Title>

        {/* Content Section */}
        <div className="space-y-4 sm:text-lg text-base leading-relaxed">
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: details?.data?.data?.description,
            }}
          ></p>
        </div>

        {/* Search and Sort Section */}
        <div className="pt-16">
          <SearchAndSort
            searchValue={search}
            onSearchChange={(e) => setSearch(e.target.value)}
            onSearch={handleSearch} // optional if you want a button click
            sortValue={sort}
            onSortChange={(e) => setSort(e.target.value)}
          />
        </div>
        <div className="pt-16">
          <CourseList courseData={courseData} />
        </div>
      </div>
    </div>
  );
};

export default DynamicCourseDetail;
