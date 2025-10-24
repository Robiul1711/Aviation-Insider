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
  const { data: adviceDetails, isLoading } = useQuery({
    queryKey: ["advice-details"],
    queryFn: () => axiosPublic.get("/aviation-advice/" + id),
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
        {isLoading ? (
          // 🔹 Shimmer skeleton for image
          <div className="relative w-full h-[250px] md:h-[500px] mb-8 rounded-md shadow-md overflow-hidden bg-gray-300">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        ) : (
          <img
            src={adviceDetails?.data?.data?.image}
            alt={adviceDetails?.data?.data?.title}
            className="w-full h-[250px] md:h-[500px] mb-8 rounded-md shadow-md object-cover"
          />
        )}

        <div className=" max-w-none text-gray-800">
          <h2 className="text-3xl font-bold mb-4">
            {adviceDetails?.data?.data?.title}
          </h2>
          <p
         className="prose lg:prose-lg max-w-none article-content "
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
