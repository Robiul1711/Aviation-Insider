import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const FullTimeEmployment = () => {
  return (
    <div>
      <CommonBanner image={image} title="Full Time Employment" />
      <div className="section-padding-x py-16">
        <div className="space-y-5 pb-10">
          <Title level="title20" className="text-black text-center">
            Training to become a commercial pilot alongside full-time employment
            is possible however it requires workload management and dedicated
            control of time. This would be possible by following a modular
            course, however it is important to consider all the routes
            available.
          </Title>
          <Title level="title20" className="text-black text-center">
            COVID NOTE: With the current condition of the aviation industry
            training part-time alongside your current employment on a modular
            route would be recommended.
          </Title>
          <Title level="title20" className="text-black text-center">
            Do you know which type of course suits you?{" "}
          </Title>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/training-courses-menu")}
          >
            I know which course suits me
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/find-the-right-course")}
          >
            I DON'T know which course suits me
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default FullTimeEmployment;
