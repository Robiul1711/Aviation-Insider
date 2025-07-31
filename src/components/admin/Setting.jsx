import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Preferences from "./Preferences";
import Security from "./Security";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("personalInfo");

  const tabs = [
    { key: "personalInfo", label: "Personal Information" },
    // { key: "preferences", label: "Preferences" },
    { key: "security", label: "Security" },
  ];

  return (
    <div className="text-black p-6">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "border-b-1 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === "personalInfo" && <PersonalInformation />}
        {/* {activeTab === "preferences" && <Preferences />} */}
        {activeTab === "security" && <Security />}
      </div>
    </div>
  );
};

export default Setting;
