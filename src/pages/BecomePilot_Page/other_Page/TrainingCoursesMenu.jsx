import React, { useEffect, useState } from "react";
import image from "@/assets/images/CommercialFlying.png";

import CommonBanner from "@/components/common/CommonBanner";
import CommonAds from "@/components/common/CommonAds";
import ModularCourse from "@/components/trainingCoursesMenu_Components/ModularCourse";
import ModularFastTrack from "@/components/trainingCoursesMenu_Components/ModularFastTrack";
import IntegratedCourse from "@/components/trainingCoursesMenu_Components/IntegratedCourse";
import UKModularFastTrackCourse from "@/components/trainingCoursesMenu_Components/UKModularFastTrackCourse";
import UKIntegratedCourse from "@/components/trainingCoursesMenu_Components/UKIntegratedCourse";

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const courseComponents = {
  "Modular Course": ModularCourse,
  "UK Modular Fast Track Course": ModularFastTrack,
  "Integrated Course": IntegratedCourse,
  "Modular Fast Track Course": UKModularFastTrackCourse,
  "UK Integrated Course": UKIntegratedCourse,
};

const bannerTitles = {
  "Modular Course": "Modular Flight Training",
  "UK Modular Fast Track Course": "Modular Fast Track Training in the UK",
  "Integrated Course": "Integrated Training in Europe",
  "Modular Fast Track Course": "Modular Fast Track Training in Europe",
  "UK Integrated Course": "Integrated Training in the UK",
};

const TrainingCoursesMenu = () => {
  const axiosPublic = useAxiosPublic();
const [categoryId, setcategoryId] = useState(5);
  // Fetch all course categories
  const { data: categoryResponse } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axiosPublic.get("/course-categories"),
  });

  const allCategories = categoryResponse?.data?.data || [];

  // Default active category
  const [activeCategory, setActiveCategory] = useState({ id: null, title: "" });

  // Set default category when data is loaded
  useEffect(() => {
    if (allCategories.length && !activeCategory.id) {
      const first = allCategories[0];
      setActiveCategory({ id: first.id, title: first.title });
    }
  }, [allCategories]);

  // Fetch category details based on active category
  const { data: detailResponse, isLoading, error } = useQuery({
    queryKey: ["category-details", categoryId],
    queryFn: () =>
      axiosPublic.get(`/course-category/details/${categoryId}`),
    enabled: !!activeCategory.id,
    onError: (err) => console.error("Error fetching details:", err),
  });
  console.log(detailResponse);
  const ActiveComponent = courseComponents[activeCategory.title];
  const bannerTitle = bannerTitles[activeCategory.title] || "Training Courses";

  return (
    <div>
      <CommonBanner image={image} title={bannerTitle} />

      <div className="section-padding-x py-16 w-full flex justify-between gap-12">
        {/* Sidebar Buttons */}
        <div className="w-[20%] flex flex-col gap-5">
          {allCategories.map((category) => (
            <button
              key={category.id}
              // onClick={() => setcategoryId(category.id)}
              onClick={() =>
              {
                setActiveCategory({ id: category.id, title: category.title })
                setcategoryId(category.id)
              }
                
              }
              className={`px-10 py-3 rounded-md text-white text-center font-semibold duration-300 ${
                activeCategory.title === category.title
                  ? "bg-Secondary shadow-md scale-[1.03]"
                  : "bg-Secondary-light hover:bg-Secondary/80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-[80%]">
          {isLoading ? (
            <div className="text-gray-500 text-lg">Loading course details...</div>
          ) : error ? (
            <div className="text-red-500 text-lg">Failed to load course details.</div>
          ) : ActiveComponent ? (
            <ActiveComponent details={detailResponse || null} />
          ) : (
            <div className="text-red-500 text-lg">Course not available.</div>
          )}
        </div>
      </div>

      <CommonAds isShow />
    </div>
  );
};

export default TrainingCoursesMenu;
