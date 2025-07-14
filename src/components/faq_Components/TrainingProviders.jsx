import React, { useState } from "react";
import Title from "../common/Title";
import EnhancedTrainingProviders from "./EnhancedTrainingProviders";
import TopTrainingProviders from "./TopTrainingProviders";
import OtherCommonLinks from "../common/OtherCommonLinks";

const TrainingProviders = () => {
  const [activeTab, setActiveTab] = useState("enhanced");

  return (
    <div className="section-padding-x py-16 ">
      <div className="flex justify-between gap-16">
        <div className="w-[80%]">
          {/* Tab Headers */}
          <div className="flex gap-10 mb-10 border-b border-gray-300">
            <Title
              level="title32"
              onClick={() => setActiveTab("enhanced")}
              className={`cursor-pointer pb-2 ${
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
              className={`cursor-pointer pb-2 ${
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
        <div className="w-[20%] flex justify-end">
          <OtherCommonLinks className={"flex flex-col gap-4"}  />
        </div>
      </div>
    </div>
  );
};

export default TrainingProviders;
