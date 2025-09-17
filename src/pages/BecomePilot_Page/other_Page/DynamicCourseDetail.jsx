import CourseList from "@/components/common/CourseList";
import SearchAndSort from "@/components/common/SearchAndSort";
import Title from "@/components/common/Title";
import { useAuth } from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";

const DynamicCourseDetail = ({ details, categoryId, categoryTitle }) => {
  const courseData = details?.data?.data?.flight_schools || [];
  const { catSearch, setCatSearch, sortBy, setSortBy } = useAuth();
  const [search, setSearch] = useState(catSearch || ""); // 👈 keep local input

  // Search only when button clicked
  const handleSearch = () => {
    setCatSearch(search); // update global query state
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
      {categoryId === 10 && <p>{categoryTitle}</p>}
      {categoryId === 11 && <p>{categoryTitle}</p>}
      {categoryId === 12 && <p>{categoryTitle}</p>}
      {categoryId === 13 && <p>{categoryTitle}</p>}
      {categoryId === 14 && <p>{categoryTitle}</p>}
      {categoryId === 15 && <p>{categoryTitle}</p>}
      {categoryId === 16 && <p>{categoryTitle}</p>}
      {categoryId === 17 && <p>{categoryTitle}</p>}
      {categoryId === 18 && <p>{categoryTitle}</p>}
      {categoryId === 19 && <p>{categoryTitle}</p>}
      {categoryId === 20 && <p>{categoryTitle}</p>}

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

        {/* 🔍 Search and Sort Section */}
        <div className="pt-16">
          <SearchAndSort
            searchValue={search} // controlled input
            onSearchChange={(e) => setSearch(e.target.value)} // update input only
            onSearch={handleSearch} // commit to query
            sortValue={sortBy}
            onSortChange={(e) => setSortBy(e.target.value)}
          />
        </div>
        <div className="pt-16">
          {/* Course List */}
          {courseData.length === 0 ? (
            <div className="text-center text-gray-500 py-10 text-lg">
              🚫 No search results found
            </div>
          ) : (
            <CourseList courseData={courseData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicCourseDetail;
