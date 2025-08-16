import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import aviationadvice from "@/assets/images/aviation-advice.png";
import details from "@/assets/images/medicaldetails.png";
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

const { data: articleDetails } = useQuery({
  queryKey: ["article-details", id], // 👈 include id
  queryFn: () => axiosPublic.get("/article/details/" + id),
  enabled: !!id, // only fetch when id exists
});

  return (
    <div>
      {/* Hero Banner */}
      <CommonBanner
        image={aviationadvice}
        title={articleDetails?.data?.data?.title}
      />

      {/* Content Section */}
      <div className="section-padding-x py-10 md:py-16 max-w-7xl mx-auto">
        <img
          src={articleDetails?.data?.data?.article?.image}
          alt={articleDetails?.data?.data?.article?.title}
          className="w-full h-[250px] md:h-[500px] mb-8 rounded-md shadow-md"
        />

        <CommentArticle articleDetails={articleDetails} />
      </div>

      <LatestArticle articleDetails={articleDetails} />
      {/* Links and Ads */}
      <OtherCommonLinks className="flex flex-wrap justify-center items-center gap-5 section-padding-x py-10 md:py-14" />
      <CommonAds />
    </div>
  );
};

export default AviationArticleDetails;
