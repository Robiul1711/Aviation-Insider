import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CiCalendar } from "react-icons/ci";

const LatestArticle = ({ articleDetails }) => {
  const LatestArticles = articleDetails?.data?.data?.latest_articles || [];

  return (
    <div className="section-padding-x py-10 md:py-16 relative">
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
          {LatestArticles.length > 0 ? (
            LatestArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <Link
                  to={`/aviation-article-details/${article.id}`}
                  className="block w-full shadow-md bg-[#F3F4F6] rounded overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-xl text-Secondary line-clamp-1">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-gray-700 line-clamp-2">
                      {article.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <CiCalendar /> {article.published_at}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-gray-500 text-center py-10 col-span-full">
              No latest articles available.
            </p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestArticle;
