import React from "react";
import image from "@/assets/images/Military.png";
import CommonBanner from "../../../components/common/CommonBanner";
import CommonAds from "../../../components/common/CommonAds";
import EuropeDetail from "@/components/selectYourDesired_components/EuropeDetail";
import Title from "@/components/common/Title";
import CommonCourseList from "@/components/common/CommonCourseList";
const EuropePPL = () => {
  return (
    <div>
      <CommonBanner image={image} title="Europe PPL" />
      <EuropeDetail />
      <div className="section-padding-x">
        <Title level="title40" className="text-black text-center py-10">
          Flight Training Courses
        </Title>
        <CommonCourseList />
      </div>
      <CommonAds isShow />
    </div>
  );
};

export default EuropePPL;
