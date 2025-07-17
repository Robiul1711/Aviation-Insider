import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const OlderThan16 = () => {
  return (
    <div>
      <CommonBanner image={image} title="Older than 16 years Old" />
      <div className="section-padding-x py-16">
        <div className="space-y-5 pb-10">
          <Title level="title20" className="text-black text-center">
            Once you reach 16 years old training to become a pilot is both
            possible and in some cases cost-effective. This all depends on how
            you plan to train towards your commercial license.
          </Title>
          <Title level="title20" className="text-black text-center">
            There are two options available, a modular or integrated course. You
            can read about the different course types here OR Let our
            interactive guide recommend the best route to you based on a few
            questions.
          </Title>
        </div>
        <Title level="title40" className="text-black text-center">
          Do you know which type of course suits you?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/training-courses-menu")}
          >
            I Know which course suits me
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/find-the-right-course")}
          >
            I DON’T Know which course suits me
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default OlderThan16;
