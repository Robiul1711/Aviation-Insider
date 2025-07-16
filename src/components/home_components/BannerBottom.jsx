import React from "react";
import {
  AviatorIcon,
  BecomePilotIcon,
  MessageIcon,
  PlaneIcon,
} from "../common/icons/HomeIcons";
import Title from "../common/Title";

const data = [
  {
    name: "Reviews",
    icon: <MessageIcon />,
    description: "XX verified reviews from flight school students",
  },
  {
    name: "Training Providers",
    icon: <PlaneIcon />,
    description: "Up-to-date database featuring XX flight schools",
  },
  {
    name: "Aviator Tips",
    icon: <AviatorIcon />,
    description:
      "Honest insights into the aviation industry from pilots of all experience levels",
  },
  {
    name: "Become a Pilot",
    icon: <BecomePilotIcon />,
    description:
      "A powerful interactive guide to help you plan your route to the flight deck",
  },
];

const BannerBottom = () => {
  return (
    <div className="section-padding-x py-10 bg-[#EBF2F8]">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 "
          >
            <div className="min-w-12 h-12 w-12 rounded-full bg-Primary flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <Title level="title24" className="text-black">
                {item.name}
              </Title>
              <Title
                level="title16"
                className="text-[#666667] !font-normal text-pretty mt-1"
              >
                {item.description}
              </Title>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
