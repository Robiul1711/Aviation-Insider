import React from "react";
import banner from "../../assets/images/banner.png";
import Title from "../common/Title";
import {
  BookIcon,
  MessageIcon,
  PlaneIcon,
  SearchIcon,
} from "../common/icons/HomeIcons";
import { Link } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const data = [
    {
    name: "Leave A Review",
    icon: <MessageIcon className="size-6 md:size-auto" />,
    description: "Review your flight training experience",
    link: "/review",
  },
  {
    name: "Find an ATO",
    icon: <SearchIcon className="size-6 md:size-auto" />,
    description: "Find and compare schools that meet your needs.",
    link: "/all-flight-schools",
  },
  {
    name: "Future Pilot",
    icon: <PlaneIcon className="size-6 md:size-auto" />,
    description: "Interactive guide to starting YOUR aviation career",
    link: "/become-pilot",
  },
  {
    name: "Trainee Pilot",
    icon: <BookIcon className="size-6 md:size-auto" />,
    description: "All the tools you need through your training",
    link: "/training-providers",
  },

];

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const { data: bannerData, isLoading } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cms/home_page/banner_section");
      return res.data;
    },
  });

  return (
    <div className="relative w-full">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Banner Image */}
      {isLoading ? (
        <div className="w-full h-[650px] sm:h-[600px] xmd:h-[750px] bg-gray-300 animate-pulse" />
      ) : (
        <img
          src={bannerData?.data?.banner_section?.image || banner}
          alt="Flight school banner"
          className="w-full h-[650px] sm:h-[600px] xmd:h-[750px] object-cover"
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 z-20 section-padding-x py-10 sm:py-16 md:py-24 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Text */}
          <div className="lg:w-2/3 w-full text-center lg:text-left ">
            {isLoading ? (
              <>
                <div className="h-10 bg-gray-400 animate-pulse w-3/4 mx-auto lg:mx-0 rounded" />
                <div className="h-6 bg-gray-400 animate-pulse w-1/2 mx-auto lg:mx-0 mt-4 rounded" />
              </>
            ) : (
              <>
                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {bannerData?.data?.banner_section?.title}
                </h1>
                <Title
                  level="title24"
                  className="text-white !font-normal mt-6"
                  dangerouslySetInnerHTML={{
                    __html: bannerData?.data?.banner_section?.description || "",
                  }}
                />
              </>
            )}
          </div>

         {/* Right: Cards */}
<div className="w-full lg:w-1/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
  {isLoading
    ? // 🔹 Skeleton Loader
      Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="p-4 rounded-2xl bg-gray-300/50 animate-pulse flex flex-col items-center text-center gap-2"
        >
          <div className="sm:w-12 size-10 sm:h-12 rounded-full bg-gray-400" />
          <div className="h-4 w-20 bg-gray-400 rounded" />
          <div className="h-3 w-28 bg-gray-400 rounded" />
        </div>
      ))
    : // 🔹 Real Cards
      data.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className="p-4 rounded-2xl bg-Primary/60 hover:bg-Primary/80 duration-300 flex flex-col items-center text-center gap-2"
        >
          <div className="sm:w-12 size-10 sm:h-12 rounded-full bg-Primary flex items-center justify-center">
            {item.icon}
          </div>
          <Title level="title20" className="text-white">
            {item.name}
          </Title>
          <Title
            level="title16"
            className="text-white !font-normal leading-snug"
          >
            {item.description}
          </Title>
        </Link>
      ))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
