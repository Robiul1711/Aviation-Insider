import React from "react";
import pilotnetwork from "../../assets/images/pilotnetwork.png";
import CommonBanner from "@/components/common/CommonBanner";
import CommonCircle from "@/components/common/CommonCircle";
import TrainingProviders from "@/components/faq_Components/TrainingProviders";
import CommonAds from "@/components/common/CommonAds";
import ParthnerLink from "@/components/parthner_Component/ParthnerLink";
const Parthner = () => {
  return (
    <div>
      <CommonBanner image={pilotnetwork} title="Partners" />
      <CommonCircle />
      <ParthnerLink />
      <TrainingProviders />
      <CommonAds />
    </div>
  );
};

export default Parthner;
