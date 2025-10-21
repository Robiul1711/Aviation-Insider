import CommonBanner from '@/components/common/CommonBanner';
import React, { useState } from 'react';
import triningprovider from '@/assets/images/triningprovider.png';
import Title from '@/components/common/Title';
import CommonAds from '@/components/common/CommonAds';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import IntrigatedCourseData from '@/components/common/IntrigatedCourseData';
import SearchAndSort from '@/components/common/SearchAndSort';
import PaginationComponent from '@/components/common/PaginationComponent';

const IntegratedCoursesPage = () => {
  const axiosPublic = useAxiosPublic();
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const { data: IntrigatedCourse, isLoading } = useQuery({
    queryKey: ['IntrigatedCourseData', pageCount, search, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        '/course-category/details/course/integrated-course',
        {
          params: { page: pageCount, search, sort },
        }
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const hasCourses = IntrigatedCourse?.data?.flight_schools?.length > 0;

  return (
    <div>
      {/* Banner */}
      <CommonBanner
        image={triningprovider}
        title={IntrigatedCourse?.data?.title || 'Integrated Courses'}
      />

      <div className="section-padding-x pb-16">
        {/* Description */}
        <Title level="title20" className="text-black py-10 text-center md:text-left">
          {IntrigatedCourse?.data?.description ||
            'Explore our available integrated courses below.'}
        </Title>

        {/* Search and Sort */}
        <div className=" mb-10">
          <SearchAndSort
            searchValue={search}
            onSearchChange={(e) => setSearch(e.target.value)}
            onSearch={() => setPageCount(1)}
            sortValue={sort}
            onSortChange={(e) => setSort(e.target.value)}
            sortOptions={[
              { label: 'Low to High', value: 'low_to_high' },
              { label: 'High to Low', value: 'high_to_low' },
            ]}
          />
        </div>

        {/* Main content */}
        <div className="mt-8">
          {isLoading ? (
            <p className="text-center text-gray-500 py-20 text-lg font-medium">
              Loading courses...
            </p>
          ) : hasCourses ? (
            <>
              <IntrigatedCourseData
                courseData={IntrigatedCourse?.data}
                isLoading={isLoading}
              />
              <div className="mt-10 flex justify-center">
                <PaginationComponent
                  pageCount={IntrigatedCourse?.meta?.last_page || 1}
                  setPageCount={setPageCount}
                  forcePage={IntrigatedCourse?.meta?.current_page || 1}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-20">
       
              <p className="text-gray-500 text-lg font-medium">
                No courses found. Try searching again.
              </p>
            </div>
          )}
        </div>
      </div>

      <CommonAds />
    </div>
  );
};

export default IntegratedCoursesPage;
