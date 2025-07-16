import React from "react";
import banner from "../../assets/images/banner.png";
import Title from "../common/Title";
import {
  BookIcon,
  MessageIcon,
  PlaneIcon,
  SearchIcon,
} from "../common/icons/HomeIcons";

const data = [
  {
    name: "Flight School",
    icon: <PlaneIcon />,
    description: "Learn to fly with hands-on aviation training.",
  },
  {
    name: "Course Material",
    icon: <BookIcon />,
    description: "Access resources and guides to support your studies.",
  },
  {
    name: "Community",
    icon: <MessageIcon />,
    description: "Connect with instructors and fellow students.",
  },
  {
    name: "Search & Compare",
    icon: <SearchIcon />,
    description: "Find and compare schools that meet your needs.",
  },
];

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>
      <img src={banner} alt="Flight school banner" className="w-full h-auto" />

      <div className="absolute top-0 left-0 w-full h-full z-20 section-padding-x py-20 flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-[80%] w-full text-center">
          <h1 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-tight">
            Behind Every Pilot is a Story
          </h1>
          <Title level="title24" className="text-white !font-normal mt-6">
            Read reviews, find a flight school and start your own journey to the
            flight deck using Europe's first flight school comparison and review
            platform
          </Title>
        </div>

        <div className="lg:w-[20%] w-full grid grid-rows-4 gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-Primary/50 hover:bg-Primary/80 duration-300 flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-Primary flex items-center justify-center">
                {item.icon}
              </div>
              <Title level="title24" className="text-white text-center">
                {item.name}
              </Title>
              <Title
                level="title16"
                className="text-white text-center !font-normal"
              >
                {item.description}
              </Title>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
