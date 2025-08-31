import React from "react";
import Title from "../common/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AboutHero = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: abouthero,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["abouthero"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/cms/about_page/hero_section`);
      return response.data;
    },
  });

  return (
    <div className="section-padding-x flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 py-10 md:py-16 bg-Secondary">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-6 bg-gray-600 rounded-md animate-pulse w-3/4 mx-auto lg:mx-0"></div>
            <div className="h-6 bg-gray-600 rounded-md animate-pulse w-2/4 mx-auto lg:mx-0"></div>
            <div className="h-6 bg-gray-600 rounded-md animate-pulse w-1/3 mx-auto lg:mx-0"></div>
          </div>
        ) : (
          <Title
            level="title20"
            className="text-white"
            dangerouslySetInnerHTML={{
              __html: abouthero?.data?.hero_section?.description || "",
            }}
          />
        )}
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {isLoading ? (
          <div className="w-[300px] h-[200px] bg-gray-600 rounded-md animate-pulse" />
        ) : (
          <img
            src={abouthero?.data?.hero_section?.image}
            alt="About Hero"
            className="max-w-full h-auto object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default AboutHero;
