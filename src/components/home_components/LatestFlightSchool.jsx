import React, { useRef } from "react";
import Title from "../common/Title";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const LatestFlightSchool = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const axiosPublic = useAxiosPublic();

  const { data: LatestFlight, isLoading } = useQuery({
    queryKey: ["latestFlightSchools"],
    queryFn: () => axiosPublic.get("/reviews/latest-flight-schools"),
  });

  if (isLoading) {
    return (
      <div className="section-padding-x py-8 md:py-16 text-center text-gray-500">
        Loading reviews...
      </div>
    );
  }

  return (
    <div className="section-padding-x py-8 md:py-16">
      <Title level="title40" className="text-black text-center mb-10">
        Latest Flight School Reviews
      </Title>

      <div className="relative">
        {/* Navigation Buttons */}
        <div
          ref={navigationPrevRef}
          className="absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-Primary hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-Primary hover:text-white transition"
        >
          <ChevronRight size={24} />
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {LatestFlight?.data?.data?.map((review) => (
            <SwiperSlide key={review.id}>
              <Link  to={`/school-profile/${review?.flight_school_id}`} className="w-full h-full flex flex-col justify-between p-6 rounded-2xl border bg-white hover:shadow-lg transition">
                {/* Top Section */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.image ||
                        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      }
                      alt={review.commentTitle}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <p
                     
                      className="text-base font-semibold text-gray-800 hover:text-Primary transition"
                    >
                      {review?.name}
                    </p>
                  </div>
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={review.overall_percentage}
                      text={`${review.overall_percentage}%`}
                      styles={buildStyles({
                        pathColor: "#10B981",
                        textColor: "#111827",
                        trailColor: "#E5E7EB",
                      })}
                    />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mt-4 text-gray-900 line-clamp-1">
                  {review?.description}
                </h2>

                {/* Message */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {review?.message}
                </p>

                {/* Footer */}
                <div className="mt-4 text-xs text-gray-500 italic">
                  {review?.school || "Unknown Flight School"}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestFlightSchool;
