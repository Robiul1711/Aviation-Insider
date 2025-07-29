import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import TopratedProviders from "@/components/trainingProvidersAllComponents/TopratedProviders";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import TrainingProviders from "@/assets/images/TrainingProviders.png";
const data = [
  {
    id: 1,
    name: "Flight Performance Training LTD",
    percentage: 66,
    image: TrainingProviders,
    review: "24",
    category: "EGKA",
  },
  {
    id: 2,
    name: "Euro Flight Training",
    percentage: 82,
    image: TrainingProviders,
    review: "31",
    category: "EGKA",
  },
  {
    id: 3,
    name: "SkyWings",
    percentage: 74,
    image: TrainingProviders,
    review: "18",
    category: "EGKA",
  },
  {
    id: 4,
    name: "FlyElite",
    percentage: 90,
    image: TrainingProviders,
    review: "45",
    category: "EGKA",
  },
  {
    id: 5,
    name: "AeroMax",
    percentage: 58,
    image: TrainingProviders,
    review: "12",
    category: "EGKA",
  },
];
const TOPFLIGHTSCHOOLS = () => {
  return (
    <div>
      <CommonBanner
        image={triningprovider}
        title="Top Rated Training Providers"
      />
      <div className="section-padding-x">
        <Title level="title20" className="text-black  py-10">
          A list of all rated Training Providers. To be featured in this list
          the training provider must have received at least 3 reviews.{" "}
        </Title>
        <div className="mb-10">
          <TopratedProviders data={data} />
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default TOPFLIGHTSCHOOLS;
