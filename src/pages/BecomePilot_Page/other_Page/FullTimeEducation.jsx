import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const FullTimeEducation = () => {
  return (
    <div>
      <CommonBanner image={image} title="Full Time Education" />
      <div className="section-padding-x py-16">
        <div className="space-y-5 pb-10">
          <Title level="title20" className="text-black text-center">
 It is possible to start to learn to fly from as young as 14 years old, however it is not possible to gain your first flying licence till you turn 17 years old.
          </Title>
          <Title level="title20" className="text-black text-center">
        To fly commercially you need to be 18 years old which means that while it is possible to start training at younger ages – it is often more financially beneficial to wait till you are at least 16 years old.
          </Title>
        </div>
        <Title level="title40" className="text-black text-center">
       How Old Are You?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/older-than-16")}
          >
           Older than 16 years Old
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/younger-than-16")}
          >
            Younger than 16 Years Old
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default FullTimeEducation;
