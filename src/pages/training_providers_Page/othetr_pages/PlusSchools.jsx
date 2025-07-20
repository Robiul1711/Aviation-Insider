import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/triningprovider.png";
import tiq from "@/assets/images/tiq.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import FlightSchoolsTable from "@/components/trainingProvidersAllComponents/FlightSchoolsTable";
import BrandSection from "@/components/home_components/BrandSection";
import VTPSFAQSection from "@/components/trainingProvidersAllComponents/VTPSFAQSection";
import VarifiedSchoolRatting from "@/components/trainingProvidersAllComponents/VarifiedSchoolRatting";
import PlusSchoolRating from "@/components/trainingProvidersAllComponents/PlusSchoolRating";
import VTPSFAQSection2 from "@/components/trainingProvidersAllComponents/VTPSFAQSection2";

const PlusSchools = () => {
  return (
    <div>
      <CommonBanner
        image={triningprovider}
        title="Plus Schools​​​​"
      />
        <div className="flex py-16 gap-20 bg-Secondary section-padding-x">
          <div className="space-y-10">
            <Title level="title20" className="text-white">
              At Pilot Network we are building the largest database of flight
              schools, training courses and student reviews with the aim of
              providing a platform for the next generation of pilots to fully
              research their options for flight training. While we endeavour to
              include as many training providers as possible, with over 200 in
              our database so far, it’s not possible to update these ourselves.
              This is where the Verified Training Providers Scheme (VTPS) comes
              in.
            </Title>
            <Title level="title20" className="text-white">
              The VTPS allows training providers to keep their own information
              up to date by being in direct contact with us. This ensures the
              data we hold is both accurate and truly reflective of the
              provider, while also allowing us to include more detailed profiles
              for those providers.
            </Title>
            <Title level="title20" className="text-white">
              VTPS Members also help us to shape the future of Pilot Network
              through regular discussions and a welcoming of feedback to the
              Pilot Network Team.
            </Title>
          </div>
          <img src={tiq} alt="" />
        </div>
        <BrandSection />
        <VTPSFAQSection2 />

      <div className="section-padding-x">
      <PlusSchoolRating />
      </div>
      <CommonAds />
    </div>
  );
};

export default PlusSchools;