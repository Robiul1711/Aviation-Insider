import React, { useState } from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import ModularCourse from "@/components/trainingCoursesMenu_Components/ModularCourse";
import ModularFastTrack from "@/components/trainingCoursesMenu_Components/ModularFastTrack";
import IntegratedCourse from "@/components/trainingCoursesMenu_Components/IntegratedCourse";
import UKModularFastTrackCourse from "@/components/trainingCoursesMenu_Components/UKModularFastTrackCourse";
import UKIntegratedCourse from "@/components/trainingCoursesMenu_Components/UKIntegratedCourse";

const courseButtons = [
  "Modular Course",
  "Modular Fast Track Course",
  "Integrated Course",
  "UK Modular FastTrack Course",
  "UK Integrated Course",
];

const courseComponents = {
  "Modular Course": ModularCourse,
  "Modular Fast Track Course": ModularFastTrack,
  "Integrated Course": IntegratedCourse,
  "UK Modular FastTrack Course": UKModularFastTrackCourse,
  "UK Integrated Course": UKIntegratedCourse,
};

const bannetTitle=[
  "Modular Flight Training",
  "Modular Fast Track Training in Europe",
  "Integrated Training in Europe",
  "Modular Fast Track Training in the UK",
  "Integrated Training in the UK",
]
const TrainingCoursesMenu = () => {
  const [activeCourse, setActiveCourse] = useState("Modular Course"); 

  const ActiveComponent = courseComponents[activeCourse]; 

  return (
    <div>
      <CommonBanner image={image} title={bannetTitle[courseButtons.indexOf(activeCourse)]} />

      <div className="section-padding-x py-16 w-full flex justify-between gap-12">
        {/* Sidebar Buttons */}
        <div className="w-[20%] flex flex-col gap-5">
          {courseButtons.map((label, index) => (
            <button
              key={index}
              onClick={() => setActiveCourse(label)}
              className={`px-10 py-3 rounded-md text-white duration-300 ${
                activeCourse === label
                  ? "bg-Secondary"
                  : "bg-Secondary-light hover:bg-Secondary/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-[80%]">
          <ActiveComponent />
        </div>
      </div>

      <CommonAds isShow />
    </div>
  );
};

export default TrainingCoursesMenu;
