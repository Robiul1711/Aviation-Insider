import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import FlightSchoolsTable from "@/components/trainingProvidersAllComponents/FlightSchoolsTable";

const AllTrainingProviders = () => {
  return (
    <div>
      <CommonBanner image={triningprovider} title="All Flight Schools" />
      <div className="section-padding-x">
        <Title level="title20" className="text-black  py-10">
          Below you will find a list of all the training providers we currently
          have in our database. If you would like to see only the training
          providers which have received a review click here. If your provider is
          still missing please do not hesitate to{" "}
          <span className="text-blue-500">contact us.</span>
        </Title>
        <FlightSchoolsTable />
      </div>
      <CommonAds />
    </div>
  );
};

export default AllTrainingProviders;
