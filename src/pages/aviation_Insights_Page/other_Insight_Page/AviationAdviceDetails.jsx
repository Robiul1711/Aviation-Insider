import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import aviationadvice from "@/assets/images/aviation-advice.png";
import details from "@/assets/images/medicaldetails.png";
import OtherCommonLinks from "@/components/common/OtherCommonLinks";
import CommonAds from "@/components/common/CommonAds";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const AviationAdviceDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: adviceDetails } = useQuery({
    queryKey: ["advice-details"],
    queryFn: () => axiosPublic.get("/aviation-advice/details/" + id),
  });

  return (
    <div>
      {/* Hero Banner */}
      <CommonBanner
        image={aviationadvice}
        title={adviceDetails?.data?.data?.title}
      />

      {/* Content Section */}
      <div className="section-padding-x py-10 md:py-16 max-w-7xl mx-auto">
        <img
          src={adviceDetails?.data?.data?.image}
          alt="Medical details"
          className="w-full h-[250px] md:h-[500px] mb-8 rounded-md shadow-md"
        />

        <div className=" max-w-none text-gray-800">
          <p
            className="text-lg mb-4"
            dangerouslySetInnerHTML={{
              __html: adviceDetails?.data?.data?.description,
            }}
          ></p>
        </div>
      </div>

      {/* Links and Ads */}
      <OtherCommonLinks className="flex flex-wrap justify-center items-center gap-5 section-padding-x py-7 md:py-14" />
      <CommonAds />
    </div>
  );
};

export default AviationAdviceDetails;
