import React, { useState } from "react";
import Title from "../common/Title";
import { Link } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

const ParthnerLink = () => {
  const axiosPublic = useAxiosPublic();
  const [pageCount, setPageCount] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["parthner-link", pageCount],
    queryFn: () => axiosPublic.get("/pilot-network-sponsors", {
      params: {
        page: pageCount,
        per_page: 8,
      },
    }),
  });

  // Loading Skeleton Component
  const SkeletonCard = () => (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border animate-pulse">
      {/* Logo Skeleton */}
      <div className="w-28 h-20 bg-gray-200 rounded-md mb-4"></div>
      
      {/* Airline Name Skeleton */}
      <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
      
      {/* Description Skeleton */}
      <div className="w-full mb-4">
        <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
      </div>
      
      {/* Button Skeleton */}
      <div className="h-10 bg-gray-200 rounded-md w-32"></div>
    </div>
  );

  // Pagination Skeleton
  const SkeletonPagination = () => (
    <div className="flex justify-center mt-8 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-20 h-10 bg-gray-200 rounded-md"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-10 h-10 bg-gray-200 rounded-md"></div>
        ))}
        <div className="w-20 h-10 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="section-padding-x py-16 bg-gray-50">
        <Title level="title40" className="text-black text-center mb-14">
          OUR PARTNERS
        </Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        
        <SkeletonPagination />
      </div>
    );
  }

  const partners = data?.data?.data || [];
console.log(partners);
  return (
    <div className="section-padding-x py-16 bg-gray-50">
      <Title level="title40" className="text-black text-center mb-14">
        OUR PARTNERS
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform border"
          >
            {/* Logo */}
            <img
              src={item.image}
              alt={item.airline_name}
              className="w-28 h-20 object-contain mb-4"
            />

            {/* Airline Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.airline_name}
            </h3>

            {/* Description */}
            <p 
              className="text-sm text-gray-600 mb-4 line-clamp-3" 
              dangerouslySetInnerHTML={{ __html: item.description }}
            />

            {/* Website Button */}
            {item.website_url && (
              <Link
                to={item.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-Secondary text-white rounded-md hover:bg-Secondary-light transition"
              >
                Visit Website
              </Link>
            )}
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ReactPaginate
          breakLabel="..."
          pageCount={data?.data?.meta?.last_page || 1}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={(event) => {
            setPageCount(event.selected + 1);
          }}
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
  );
};

export default ParthnerLink;