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

const reviews = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    rating: 90,
    commentTitle: "Excellent! Training School",
    school: "SkyPath Training Academy (STA)",
    comment:
      "ASG were recommended to me by a friend and I can see why. Their instructors were professional and supportive throughout.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-handsome-man_171337-19090.jpg",
    rating: 75,
    commentTitle: "Highly recommended",
    school: "Eagle Wings Aviation",
    comment:
      "The best aviation school I’ve attended. Modern equipment and passionate instructors.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/handsome-man-posing-outdoor_144627-26771.jpg",
    rating: 85,
    commentTitle: "Supportive staff",
    school: "Cloud Nine Flight School",
    comment:
      "Staff are very friendly and supportive. I’ve learned so much about flying and safety.",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/handsome-man-posing-outdoor_144627-26771.jpg",
    rating: 85,
    commentTitle: "Supportive staff",
    school: "Cloud Nine Flight School",
    comment:
      "Staff are very friendly and supportive. I’ve learned so much about flying and safety.",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-photo/handsome-man-posing-outdoor_144627-26771.jpg",
    rating: 85,
    commentTitle: "Supportive staff",
    school: "Cloud Nine Flight School",
    comment:
      "Staff are very friendly and supportive. I’ve learned so much about flying and safety.",
  },
];

const LatestFlightSchool = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const axiosPublic=useAxiosPublic();
  const {data:LatestFlight}=useQuery({
    queryKey:["larestflight"],
    queryFn:()=>axiosPublic.get("/reviews/latest-flight-schools")
  })
  return (
    <div className="section-padding-x py-8 md:py-16">
      <Title level="title40" className="text-black text-center mb-5 md:mb-10">
        Latest Flight School Reviews
      </Title>

      <div className="relative ">
        {/* Navigation Buttons */}
        <div
          ref={navigationPrevRef}
          className="absolute top-[40%] left-0 md:-left-5 z-10 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-Primary hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute top-[40%] right-0 md:-right-5 z-10 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-Primary hover:text-white transition"
        >
          <ChevronRight size={24} />
        </div>

        <Swiper
          spaceBetween={24}
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
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {LatestFlight?.data?.data?.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="w-full p-6 rounded-2xl  border  h-full">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4 ">
                    <img
                      src={review?.image || "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}
                      alt={review.commentTitle}
                      className="w-[40px] h-[40px] object-cover rounded-full"
                    />

                    <Link to={`/school-profile/${review?.flight_school_id}`} className="text-[1rem] font-[500] text-[#414652]">
                      {review?.name}
                    </Link>
                  </div>
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={review.overall_percentage}
                      text={`${review.overall_percentage}%`}
                      styles={buildStyles({
                        pathColor: "#10B981",
                        textColor: "#111827",
                        trailColor: "#D1D5DB",
                      })}
                    />
                  </div>
                </div>

                <h2 className="text-[1.2rem] font-semibold mt-5">
                  {review?.description}
                </h2>

                <p className="text-justify text-[0.9rem] my-3 text-[#414652]">
                  {review?.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestFlightSchool;
