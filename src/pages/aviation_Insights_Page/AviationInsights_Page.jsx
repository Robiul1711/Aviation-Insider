import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import React from "react";
import aviationinsights1 from "@/assets/images/aviation-insights1.png";
import aviationinsights2 from "@/assets/images/aviation-insights2.png";
import { Link } from "react-router-dom";

const AviationInsights_Page = () => {
  return (
    <div>
      <div className="section-padding-x py-16 bg-Secondary text-white flex flex-col justify-center items-center ">
        <Title level="title40">Aviation Insights</Title>
      </div>
      <div className="section-padding-x py-16 flex items-center justify-center gap-8">
        <Link to="/aviation-advice" className="relative w-full overflow-hidden rounded-xl shadow-md group">
          <img src={aviationinsights1} alt="" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
          <div className="absolute bottom-0 left-0 w-full h-[100px] backdrop-blur-md text-white bg-white/10 flex flex-col justify-center items-center  p-4">
            <h2 className="text-3xl font-bold">AVIATION ADVICE</h2>
            <p className="text-lg">
              Advice on all things to do with flight training
            </p>
          </div>
        </Link>
        <Link to="/aviation-articles" className="relative w-full  overflow-hidden rounded-xl shadow-md group">
          <img src={aviationinsights2} alt="" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
          <div className="absolute bottom-0 left-0 w-full h-[100px] backdrop-blur-md text-white bg-white/10 flex flex-col justify-center items-center  p-4">
            <h2 className="text-3xl font-bold">AVIATION ARTICLES</h2>
            <p className="text-lg">
              Advice on all things to do with flight training
            </p>
          </div>
        </Link>
      </div>
      <CommonAds />
    </div>
  );
};

export default AviationInsights_Page;
