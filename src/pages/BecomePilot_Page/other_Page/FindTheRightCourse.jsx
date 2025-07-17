import React from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import Title from "@/components/common/Title";
import CommonButton from "@/components/common/CommonButton";
const FindTheRightCourse = () => {
  return (
    <div>
      <CommonBanner image={image} title="Find The Right Course" />
      <div className="section-padding-x py-16">
        <div className="space-y-5 pb-10">
          <Title level="title20" className="text-black text-center">
            Training to become a commercial pilot is both costly and time
            consuming. The two routes available both have positives and
            negatives so it is important to find the route that suits you.
          </Title>
          <Title level="title20" className="text-black text-center">
            Financing flight training is often one of the hardest parts,
            therefore any cost cutting or saving that can occur we highly
            recommend.
          </Title>
          <Title level="title20" className="text-black text-center">
            The first step is to consider if you have already paid for any
            flight training or hold any licences.{" "}
          </Title>
        </div>
        <Title level="title40" className="text-black text-center">
          Have you currently logged any flying time, or do you currently hold a
          flying licence?
        </Title>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/pilot-with-previous-experience")}
          >
            Yes I have logged flying time, or currently hold a flying licence
          </CommonButton>
          <CommonButton
            variant="secondary"
            onClick={() => (window.location.href = "/first-time-flyer")}
          >
            No I have not logged any flying time and do not hold a flying
            licence
          </CommonButton>
        </div>
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default FindTheRightCourse;
