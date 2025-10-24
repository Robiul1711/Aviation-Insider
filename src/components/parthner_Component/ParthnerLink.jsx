import React, { useState } from "react";
import Title from "../common/Title";
import { Link } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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

  // Swiper Skeleton
  const SkeletonSwiper = () => (
    <div className="animate-pulse">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <SkeletonCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  if (isLoading) {
    return (
      <div className="section-padding-x py-16 bg-gray-50">
        <Title level="title40" className="text-black text-center mb-14">
          OUR PARTNERS
        </Title>
        <SkeletonSwiper />
      </div>
    );
  }

  const partners = data?.data?.data || [];

  return (
    <div className="section-padding-x py-16 bg-gray-50">
      <Title level="title40" className="text-black text-center mb-14">
        OUR PARTNERS
      </Title>

      {/* Swiper Component */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {partners.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform border h-full">
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
                  className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow" 
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                {/* Website Button */}
                {item.website_url && (
                  <Link
                    to={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-Secondary text-white rounded-md hover:bg-Secondary-light transition mt-auto"
                  >
                    Visit Website
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !-left-2 md:!-left-4 !w-10 !h-10 !bg-white !rounded-full !shadow-lg after:!text-sm after:!text-gray-700 hover:!bg-Secondary hover:after:!text-white"></div>
        <div className="swiper-button-next !-right-2 md:!-right-4 !w-10 !h-10 !bg-white !rounded-full !shadow-lg after:!text-sm after:!text-gray-700 hover:!bg-Secondary hover:after:!text-white"></div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination !relative !mt-8"></div>
      </div>


    </div>
  );
};

export default ParthnerLink;