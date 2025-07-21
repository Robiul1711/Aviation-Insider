import React, { useState } from "react";
import Title from "../common/Title";
import EnhancedTrainingProviders from "../faq_Components/EnhancedTrainingProviders";
import TopTrainingProviders from "../faq_Components/TopTrainingProviders";
import OtherCommonLinks from "../common/OtherCommonLinks";


const MoreFlightSchool = () => {
  const [activeTab, setActiveTab] = useState("enhanced");

  return (
    <div className="section-padding-x py-8 md:py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="">
          {/* Tab Headers */}
          <div className="flex gap-10 mb-10 border-b border-gray-300">
            <Title
              level="title32"
              onClick={() => setActiveTab("enhanced")}
              className={`cursor-pointer pb-2 text-sm sm:text-base ${
                activeTab === "enhanced"
                  ? "text-Secondary border-b-2 border-Secondary"
                  : "text-gray-500"
              }`}
            >
              Enhanced Training Providers
            </Title>
            <Title
              level="title32"
              onClick={() => setActiveTab("top")}
              className={`cursor-pointer pb-2 text-sm sm:text-base ${
                activeTab === "top"
                  ? "text-Secondary border-b-2 border-Secondary"
                  : "text-gray-500"
              }`}
            >
              Top Training Providers
            </Title>
          </div>

          {/* Conditional Rendering */}
          <div>
            {activeTab === "enhanced" && <EnhancedTrainingProviders />}
            {activeTab === "top" && <TopTrainingProviders />}
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default MoreFlightSchool;