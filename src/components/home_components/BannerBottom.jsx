import React from "react";
import {
  AviatorIcon,
  BecomePilotIcon,
  MessageIcon,
  PlaneIcon,
} from "../common/icons/HomeIcons";
import Title from "../common/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const BannerBottom = () => {
  const axiosPublic = useAxiosPublic();
  const { data: bannerbottom, isLoading } = useQuery({
    queryKey: ["bannerbottom"],
    queryFn: () => axiosPublic.get("/home-page/stats"),
  })
  console.log(bannerbottom)
  const data = [
  {
    name: "Reviews",
    icon: <MessageIcon className="size-6 md:size-auto" />,
    description: `${bannerbottom?.data?.data?.verified_reviews} verified reviews from flight school students`,
  },
  {
    name: "Training Providers",
    icon: <PlaneIcon className="size-6 md:size-auto" />,
    description: `Up-to-date flight training database featuring ${bannerbottom?.data?.data?.training_providers} training organisations`,
  },
  {
    name: "Aviator Tips",
    icon: <AviatorIcon className="size-6 md:size-auto" />,
    description:
      "Honest insights into the aviation industry from pilots of all experience levels",
  },
  {
    name: "Become a Pilot",
    icon: <BecomePilotIcon className="size-6 md:size-auto" />,
    description:
      "A powerful interactive guide to help you plan your route to the flight deck",
  },
];

  // console.log(bannerbottom?.data?.data);
  return (
    <div className="section-padding-x py-10 bg-[#EBF2F8]">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 "
          >
            <div className="md:min-w-12 min-w-10 md:h-12 md:w-12 size-10 rounded-full bg-Primary flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <Title level="title24" className="text-black">
                {item.name}
              </Title>
              <Title
                level="title16"
                className="text-[#666667] !font-normal text-pretty mt-1"
              >
                {item.description}
              </Title>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
