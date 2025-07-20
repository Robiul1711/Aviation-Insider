import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import latest1 from "@/assets/images/latest1.png";
import latest2 from "@/assets/images/latest2.png";
import latest3 from "@/assets/images/latest3.png";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articleData = [
  {
    id: 1,
    image: latest1,
    title: "Insurance for students and pilots",
    description:
      "There are many websites with information .",
    date: "2023-08-15",
  },
  {
    id: 2,
    image: latest2,
    title: "Insurance",
    description: "Everything you need to know about insurance",
    date: "2023-09-10",
  },
  {
    id: 3,
    image: latest3,
    title: "Training",
    description: "Everything you need to know about training",
    date: "2023-08-20",
  },
  {
    id: 4,
    image: latest1,
    title: "Licensing",
    description: "Everything you need to know about licensing",
    date: "2023-09-15",
  },
  {
    id: 5,
    image: latest2,
    title: "Career",
    description: "Everything you need to know about career",
    date: "2023-10-01",
  },
];

const LatestArticle = () => {
  return (
    <div className="section-padding-x py-16 relative">
      <h2 className="text-2xl font-bold text-Secondary mb-8">Latest Articles</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          className="swiper-button-prev-custom absolute z-10 -left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          className="swiper-button-next-custom absolute z-10 -right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {articleData.map((article) => (
            <SwiperSlide key={article.id}>
              <Link
                to={`/aviation-article-details/${article.id}`}
                className="block w-full shadow-md bg-[#F3F4F6] rounded overflow-hidden hover:shadow-lg transition"
              >
                <img src={article.image} alt="" className="w-full object-cover" />
                <div className="p-4">
                  <h2 className="font-semibold text-xl text-Secondary">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-gray-700">{article.description}</p>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <CiCalendar /> {article.date}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestArticle;
