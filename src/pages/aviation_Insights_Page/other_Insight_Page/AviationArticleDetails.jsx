import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import aviationadvice from "@/assets/images/aviation-advice.png";
import OtherCommonLinks from "@/components/common/OtherCommonLinks";
import CommonAds from "@/components/common/CommonAds";
import CommentArticle from "@/components/Aviation_Advice_Components/CommentArticle";
import LatestArticle from "@/components/Aviation_Advice_Components/LatestArticle";
import { useParams } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AviationArticleDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: articleDetails, isLoading } = useQuery({
    queryKey: ["article-details", id],
    queryFn: () => axiosPublic.get("/article/details/" + id),
    enabled: !!id,
  });

  const article = articleDetails?.data?.data?.article;
  return (
    <div>
      {/* Hero Banner */}
      <CommonBanner
        image={aviationadvice}
        title={articleDetails?.data?.data?.article?.title}
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
    src={article?.image}
    alt={article?.title}
    className="w-full h-[250px] md:h-[500px] mb-8 rounded-md shadow-md object-cover"
  />
)}


         <CommentArticle articleDetails={articleDetails} isLoading={isLoading} />
      </div>

    <LatestArticle articleDetails={articleDetails} />

      {/* Links and Ads */}
      <OtherCommonLinks className="flex flex-wrap justify-center items-center gap-5 section-padding-x py-10 md:py-14" />
      <CommonAds />
    </div>
  );
};

export default AviationArticleDetails;
