import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SchoolSwiper = ({ SchoolDetail }) => {
  return (
    <div className="section-padding-x py-4 md:py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        navigation
        loop
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className="overflow-hidden"
      >
        {SchoolDetail?.gallery?.map((image, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full max-w-[180px] h-[100px] md:h-[250px] object-cover mx-auto rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SchoolSwiper;
