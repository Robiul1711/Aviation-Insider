import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import schools1 from '@/assets/images/schools1.png';
import schools2 from '@/assets/images/schools2.png';

const SchoolSwiper = () => {
  const images = [schools1, schools2, schools1, schools2, schools1, schools2, schools1, schools2]; // example repeated images

  return (
    <div className="section-padding-x py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={6}
        navigation
        // pagination={{ clickable: true }}
        loop
        className=" overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[250px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SchoolSwiper;

