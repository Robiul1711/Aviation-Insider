import CommonBanner from "@/components/common/CommonBanner";
import React, { useState } from "react";
import aviationadvice from "@/assets/images/aviation-advice.png";
import CommonAds from "@/components/common/CommonAds";
import AllAdviceAricle from "@/components/Aviation_Advice_Components/AllAdviceAricle";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/common/PaginationComponent";
const AviationAdvice = () => {
  const axiosPublic = useAxiosPublic();
    const [pageCount, setPageCount] = useState(1);
  const { data: articleData, isLoading } = useQuery({
    queryKey: ["advices", pageCount],
    queryFn: () => axiosPublic.get("/aviation-advices", { params: { page: pageCount } }),
  });
  const { data: adviceBanner, isLoading: bannerLoading } = useQuery({
    queryKey: ["advicesBanner"],
    queryFn: () => axiosPublic.get("/cms/aviation_advice_page/banner_section"),
  });
// console.log(adviceBanner?.data?.data?.banner_section?.image);
  return (
    <div>
      <CommonBanner image={adviceBanner?.data?.data?.banner_section?.image} title={adviceBanner?.data?.data?.banner_section?.title} />
      <div className="section-padding-x py-16">
        <p className="p-3 bg-[#F3F4F6] rounded-md text-xl mb-10" dangerouslySetInnerHTML={{__html:adviceBanner?.data?.data?.banner_section?.description}}>
          
        </p>
        <AllAdviceAricle articleData={articleData} isLoading={isLoading} />
        <div className="flex justify-center mt-10">
            <PaginationComponent
          pageCount={articleData?.data?.meta?.last_page || 1}
          setPageCount={setPageCount}
          forcePage={pageCount}
        />
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default AviationAdvice;
