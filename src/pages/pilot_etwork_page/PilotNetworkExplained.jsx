import React from "react";
import pilotnetwork from "../../assets/images/pilotnetwork.png";
import CommonBanner from "@/components/common/CommonBanner";
import CommonCircle from "@/components/common/CommonCircle";
import ThreeValue from "@/components/pilotNetwork_components/ThreeValue";
import TrainingProviders from "@/components/faq_Components/TrainingProviders";
import CommonAds from "@/components/common/CommonAds";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const PilotNetworkExplained = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["pilotnetwork"],
    queryFn: () => axiosPublic.get("/cms/pilot_network_page/banner_section"),
  });

  return (
    <div>
      <CommonBanner
        image={data?.data?.data?.banner_section?.image}
        title={data?.data?.data?.banner_section?.title}
      />
      <CommonCircle />
      <ThreeValue />
      <TrainingProviders />
      <CommonAds />
    </div>
  );
};

export default PilotNetworkExplained;
