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

const VERIFIEDSCHOOLS = () => {
  return (
    <div>
      <CommonBanner
        image={triningprovider}
        title="Verified Schools ​​​​"
      />
        <div className="flex flex-col-reverse md:flex-row items-center py-16 gap-10 md:gap-20 bg-Secondary section-padding-x">
  {/* Text Content */}
  <div className="space-y-10 text-white flex-1">
    <Title level="title20">
      At Pilot Network we are building the largest database of flight schools, training courses and student reviews with the aim of providing a platform for the next generation of pilots to fully research their options for flight training. While we endeavour to include as many training providers as possible, with over 200 in our database so far, it’s not possible to update these ourselves. This is where the Verified Training Providers Scheme (VTPS) comes in.
    </Title>
    <Title level="title20">
      The VTPS allows training providers to keep their own information up to date by being in direct contact with us. This ensures the data we hold is both accurate and truly reflective of the provider, while also allowing us to include more detailed profiles for those providers.
    </Title>
    <Title level="title20">
      VTPS Members also help us to shape the future of Pilot Network through regular discussions and a welcoming of feedback to the Pilot Network Team.
    </Title>
  </div>

  {/* Image */}
  <div className="flex-1 w-full max-w-sm md:max-w-md">
    <img src={tiq} alt="Training Info" className="w-full h-auto object-contain" />
  </div>
</div>

        <BrandSection />
        <VTPSFAQSection />

      <div className="section-padding-x">
      <VarifiedSchoolRatting />
      </div>
      <CommonAds />
    </div>
  );
};

export default VERIFIEDSCHOOLS;
