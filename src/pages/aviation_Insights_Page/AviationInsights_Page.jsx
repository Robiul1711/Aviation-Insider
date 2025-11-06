import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const AviationInsights_Page = () => {
  const axiosPublic = useAxiosPublic();

  const { data: adviceBanner } = useQuery({
    queryKey: ["advicesBanner"],
    queryFn: () => axiosPublic.get("/cms/aviation_advice_page/banner_section"),
  });

  const { data: articleBanner } = useQuery({
    queryKey: ["articlesBanner"],
    queryFn: () => axiosPublic.get("/cms/aviation_article_page/banner_section"),
  });

  return (
    <div className="w-full">
      {/* Page Title Section */}
      <div className="section-padding-x py-16 bg-Secondary text-white flex flex-col justify-center items-center text-center">
        <Title level="title40">Aviation Insights</Title>
      </div>

      {/* Banner Cards */}
      <div className="section-padding-x py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Aviation Advice Card */}
        <Link
          to="/aviation-advice"
          className="relative w-full rounded-xl overflow-hidden shadow-md group"
        >
          <img
            src={adviceBanner?.data?.data?.banner_section?.image}
            alt="Aviation Advice Banner"
            className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-5">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {adviceBanner?.data?.data?.banner_section?.title}
            </h2>
            <p
              className="text-sm md:text-base mt-2"
              dangerouslySetInnerHTML={{
                __html: adviceBanner?.data?.data?.banner_section?.description,
              }}
            />
          </div>
        </Link>

        {/* Aviation Articles Card */}
        <Link
          to="/aviation-articles"
          className="relative w-full rounded-xl overflow-hidden shadow-md group"
        >
          <img
            src={articleBanner?.data?.data?.banner_section?.image}
            alt="Aviation Articles Banner"
            className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-5">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {articleBanner?.data?.data?.banner_section?.title}
            </h2>
            <p
              className="text-sm md:text-base mt-2"
              dangerouslySetInnerHTML={{
                __html: articleBanner?.data?.data?.banner_section?.description,
              }}
            />
          </div>
        </Link>
      </div>

      {/* Ads Section */}
      <CommonAds />
    </div>
  );
};

export default AviationInsights_Page;
