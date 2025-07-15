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
    description: "All the tools you need through your training",
  },
  {
    name: "Flight School",
    icon: <BookIcon />,
    description: "All the tools you need through your training",
  },
  {
    name: "Flight School",
    icon: <MessageIcon />,
    description: "All the tools you need through your training",
  },
  {
    name: "Flight School",
    icon: <SearchIcon />,
    description: "All the tools you need through your training",
  },
];
const Banner = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
      <img src={banner} alt="" />
      <div className="absolute top-[30%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h1  className="text-white text-center text-[80px] font-semibold">
          Behind Every Pilot is a Story
        </h1>
        <Title level="title24" className="text-white text-center !font-normal mt-6">
          Read reviews, find a flight school and start your own journey to the
          flight deck using Europe's first flight school comparison and review
          platform
        </Title>
      </div>
      <div className="absolute top-[50%]  grid grid-rows-4 gap-4 right-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
        {data.map((item) => (
          <div className="p-4 rounded-2xl bg-Primary/50 hover:bg-Primary duration-300 flex flex-col items-center gap-4">
            <h1 className="w-12 h-12 rounded-full bg-Primary flex items-center justify-center">
              {item.icon}
            </h1>

            <Title level="title24" className="text-white text-center">
              {item.name}
            </Title>
            <Title
              level="title16"
              className="text-white text-center !font-normal "
            >
              {item.description}
            </Title>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
