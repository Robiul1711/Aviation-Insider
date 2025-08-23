import React from "react";
import Title from "../common/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const OurPartner = () => {
  const axiosPublic = useAxiosPublic();
  const { data: partnersData, isLoading } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/airline-partners");
      return res.data;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="section-padding-x py-8 md:py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <Title level="title40" className="text-black">
          Our Partners
        </Title>
        <Title
          level="title20"
          className="text-black mt-3 md:mt-5 text-gray-700"
        >
          We are recognised as a source of flight school information and reviews
          by leading aviation media outlets.
        </Title>
      </div>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-6 mt-10 items-center">
        {partnersData?.data?.map((partner, index) => (
          <a
            key={index}
            href={partner.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={partner.image}
              alt={partner.name || `partner-${index + 1}`}
              className="max-h-16 sm:max-h-20 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
