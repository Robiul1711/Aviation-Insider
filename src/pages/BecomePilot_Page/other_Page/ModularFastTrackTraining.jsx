import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const ModularFastTrackTraining = () => {
  return (
    <div>
      <CommonBanner image={image} title="Modular Fast Track Training Options" />
      <div className="section-padding-x py-16">
        <div className="space-y-5 pb-10">
          <Title level="title20" className="text-black ">
            Training on the modular route full-time is possible, and can even be
            undertaken at different schools for different modules. It is worth
            noting that by training full-time you will also have to have the
            funding available over a shorter amount of time.
          </Title>
          <Title level="title20" className="text-black ">
            Some schools provide what we call a “fast track” course. These are
            in essence bundle discounts, where your loyalty to one schools is
            reflected in a reduced course fee. These courses are often only
            available at few schools, so you may need to find local
            accommodation for the time of your training.
          </Title>
          <Title level="title20" className="text-black ">
            Modular training can be completed anywhere in Europe however this
            may require you to find accommodation, which could be an added cost.
          </Title>
        </div>
        <Title
          level="title40"
          className="text-black text-center max-w-[900px] mx-auto"
        >
          Would you prefer to train in the United Kingdom or anywhere in Europe?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() =>
              (window.location.href = "/training-courses-menu")
            }
          >
            United Kingdom
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/training-courses-menu")}
          >
            Anywhere in Europe
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default ModularFastTrackTraining;
