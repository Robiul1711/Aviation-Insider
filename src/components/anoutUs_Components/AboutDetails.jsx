import React from "react";
import Title from "../common/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const AboutDetails = () => {
    const axiosPublic=useAxiosPublic();
    const { data:abouDetail, isLoading, error } = useQuery({
    queryKey: ['abouDetail'],
    queryFn: async () => {
      const response = await axiosPublic.get(`/cms/about_page/fly_hub_section`);
      return response.data;
    }
  });
  return (
    <div className="section-padding-x pt-10 md:pt-0 md:my-16">
    <Title
  level="title20"
  className="text-black text-center"
  dangerouslySetInnerHTML={{
    __html: abouDetail?.data?.fly_hub_section?.description || "",
  }}
/>

      {/* <div className="mt-10 border-t-2  border-black py-8 border-b-2 ">
        <Title level="title20" className="text-black text-center">
          Pilot-Network.com is a trading name of Aviation Insider Ltd.
          <br /> <br />
          Company registered in England & Wales number 10462227
          <br /> <br />
          'Pilot Network' and the Pilot Network logo are Registered Trade Marks
          (UKIPO 3252488){" "}
        </Title>
      </div> */}
    </div>
  );
};

export default AboutDetails;
