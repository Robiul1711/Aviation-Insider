import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const CommercialFlying = () => {
  return (
    <div>
      <CommonBanner image={image} title="Commercial Flying" />
      <div className="section-padding-x py-16">
        <div className="space-y-5 pb-10">
          <Title level="title20" className="text-black text-center">
            Training towards becoming a commercial pilot follows two main
            pathways. An Integrated Course or a Modular course. Each route has
            its benefits and suits different people. To help us understand what
            route to recommend to you, we need to understand your situation.
          </Title>
          <Title level="title20" className="text-Secondary-light text-center">
            If you are a military pilot looking to convert to civilian flying we
            recommend you visit our partners at UKFlying who offer advice and
            guidance on bespoke training courses for ex-military pilots.
          </Title>
        </div>
        <Title level="title40" className="text-black text-center">
          Which option best describes your current situation?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/full-time-education")}
          >
            In Full Time Education
          </CommonButton>
          <CommonButton
            variant="secondary"
           link={"/full-time-employment"}
          >
            In Full Time Employment
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/uk-ppl")}
          >
            Unemployed/Graduated Student
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default CommercialFlying;
