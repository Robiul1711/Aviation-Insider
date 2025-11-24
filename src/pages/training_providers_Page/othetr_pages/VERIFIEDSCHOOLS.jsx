import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import tiq from "@/assets/images/tiq.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import FlightSchoolsTable from "@/components/trainingProvidersAllComponents/FlightSchoolsTable";
import BrandSection from "@/components/home_components/BrandSection";
import VTPSFAQSection from "@/components/trainingProvidersAllComponents/VTPSFAQSection";
import VarifiedSchoolRatting from "@/components/trainingProvidersAllComponents/VarifiedSchoolRatting";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const VERIFIEDSCHOOLS = () => {
  const axiosPublic = useAxiosPublic();
  const {data:triningproviderBanner}=useQuery({
    queryKey: ["triningproviderBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cms/verified_school_page/banner_section");
      return res.data;
    },
  })
  const {data:triningproviderHero}=useQuery({
    queryKey: ["triningproviderHero"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cms/verified_school_page/hero_section");
      return res.data;
    },
  })

  return (
    <div>
      <CommonBanner image={triningproviderBanner?.data?.banner_section?.image} title={triningproviderBanner?.data?.banner_section?.title} />
      <div className="flex flex-col-reverse md:flex-row items-center py-16 gap-10 md:gap-20 bg-Secondary section-padding-x">
        {/* Text Content */}
        <div className="space-y-10 text-white flex-1">
          <Title level="title20">
           <span dangerouslySetInnerHTML={{__html:triningproviderHero?.data?.hero_section?.description}}></span>
          </Title>
         
        </div>

        {/* Image */}
        <div className="flex-1  w-[200px] sm:max-w-sm md:max-w-md">
          <img
            src={triningproviderHero?.data?.hero_section?.image}
            alt="Training Info"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <BrandSection />
      <VTPSFAQSection />

      <div className="section-padding-x">
        <VarifiedSchoolRatting />
      </div>
      <CommonAds />
    </div>
  );
};

export default VERIFIEDSCHOOLS;
