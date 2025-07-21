import React from "react";
import L1 from "@/assets/images/l1.png";
import L2 from "@/assets/images/l2.png";
import L3 from "@/assets/images/l3.png";
import L4 from "@/assets/images/l4.png";
import L5 from "@/assets/images/l5.png";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import { Calendar } from "lucide-react";
import CommonButton from "../common/CommonButton";

const LatestArticles = () => {
  const items = [
    {
      id: 1,
      image: L2,
      title:
        "Ryanair Invests $500 Million in 30 Spare LEAP-1B Engines to Boost Fleet Reliability",
      date: "May 21, 2025",
    },
    {
      id: 2,
      image: L3,
      title:
        "Ryanair Invests $500 Million in 30 Spare LEAP-1B Engines to Boost Fleet Reliability",
      date: "May 21, 2025",
    },
    {
      id: 3,
      image: L4,
      title:
        "Ryanair Invests $500 Million in 30 Spare LEAP-1B Engines to Boost Fleet Reliability",
      date: "May 21, 2025",
    },
    {
      id: 4,
      image: L5,
      title:
        "Ryanair Invests $500 Million in 30 Spare LEAP-1B Engines to Boost Fleet Reliability",
      date: "May 21, 2025",
    },
  ];

  return (
    <div className="section-gap section-padding-x py-8 md:py-16">
      {/* Heading */}
      <div className="flex w-full justify-center mb-10 items-center gap-6">
        <Title level="title40" className="!text-center">
          Latest Article
        </Title>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Large Article */}
        <Link to="#" className="w-full lg:w-[40%] flex flex-col">
          <div className="w-full h-[250px] sm:h-[400px] lg:h-[700px]">
            <img
              src={L1}
              alt="latest news"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full p-6 bg-[#E9EAEB] flex flex-col gap-2">
            <Title level="title24" className="text-[#010101]">
              Ryanair Invests $500 Million in 30 Spare LEAP-1B Engines to Boost Fleet Reliability
            </Title>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-700" />
              <Title level="title16" className="!text-[#010101]">
                May 21, 2025
              </Title>
            </div>
          </div>
        </Link>

        {/* Right Grid of Articles */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Link to="#" className="flex flex-col" key={index}>
              <div className="w-full h-[220px] sm:h-[260px] md:h-[291px]">
                <img
                  src={item.image}
                  alt="latest news"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full p-6 bg-[#E9EAEB] rounded-2xl flex flex-col gap-2">
                <Title level="title24" className="text-[#010101]">
                  {item.title}
                </Title>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-700" />
                  <Title level="title16" className="!text-[#010101]">
                    {item.date}
                  </Title>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Button */}
      <CommonButton
        className="!mt-10 text-center mx-auto block"
        variant="secondary"
        onClick={() => (window.location.href = "/blog")}
      >
        More Articles
      </CommonButton>
    </div>
  );
};

export default LatestArticles;
