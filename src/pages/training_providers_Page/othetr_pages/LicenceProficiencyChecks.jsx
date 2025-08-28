import CommonBanner from "@/components/common/CommonBanner";
import React, { useState } from "react";
import triningprovider from "@/assets/images/licence.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import LicenceProficiencyData from "@/components/common/LicenceProficiencyData";
import { Search } from "lucide-react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

const LicenceProficiencyChecks = () => {
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState(""); // ✅ Search state
  const [sort, setSort] = useState("low_to_high"); // ✅ Sort state (default)

  const axiosPublic = useAxiosPublic();

  const { data: LicenceProficiency, isLoading, error } = useQuery({
    queryKey: ["LicenceProficiency", pageCount, search, sort],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/course-category/details/course/licence-proficiency-checks",
        {
          params: { 
            page: pageCount, 
            search,         // ✅ search param
            sort,           // ✅ sort param
          },
        }
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  return (
    <div>
      <CommonBanner
        image={triningprovider}
        title={LicenceProficiency?.data?.title}
      />
      <div className="section-padding-x">
        <Title level="title20" className="text-black py-10">
          {LicenceProficiency?.data?.description}
        </Title>

        {/* ✅ Search & Sort */}
        <div className="mb-8 flex items-center gap-4">
          {/* Search Box */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search course or school..."
              value={search}
              onChange={(e) => {
                setPageCount(1); // reset to page 1 when searching
                setSearch(e.target.value);
              }}
              className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden sm:block" />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sort}
            onChange={(e) => {
              setPageCount(1);
              setSort(e.target.value);
            }}
            className="h-10 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low_to_high">Price: Low to High</option>
            <option value="high_to_low">Price: High to Low</option>
          </select>
        </div>

        {/* Course List */}

        <LicenceProficiencyData courseData={LicenceProficiency?.data} isLoading={isLoading} error={error} />

        {/* ✅ Pagination */}
        <div className="flex py-10">
          <ReactPaginate
            breakLabel="..."
            pageCount={LicenceProficiency?.data?.meta?.last_page || 1}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={(event) => setPageCount(event.selected + 1)}
            containerClassName="flex items-center md:gap-3 gap-1 flex-wrap"
            previousLabel="Previous"
            nextLabel="Next"
            previousClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
            nextClassName="md:px-4 px-2 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md cursor-pointer"
            activeClassName="font-[700] bg-Secondary rounded-lg border-none"
            activeLinkClassName="text-white"
            disabledClassName="opacity-50 cursor-not-allowed"
            breakClassName="md:px-4 px-2 py-2 text-sm font-medium"
            pageClassName="mx-1 cursor-pointer"
            pageLinkClassName="w-[42px] h-[42px] border border-primary flex justify-center items-center text-black rounded-lg hover:bg-Secondary hover:text-white transition-colors"
            forcePage={pageCount - 1}
          />
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default LicenceProficiencyChecks;
