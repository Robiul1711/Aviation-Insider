import React from "react";
import Marquee from "react-fast-marquee";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const BrandSection = () => {
const axiosPublic = useAxiosPublic();
const {data: flightSchools} = useQuery({
  queryKey: ['flight-schools'],
  queryFn: () => axiosPublic.get('/flight-schools'),
})
const FlightSchools = flightSchools?.data?.data || [];
  return (
      <div className="overflow-hidden w-full md:py-12 py-6 section-padding-x">
  <Marquee pauseOnHover speed={40}>
    {FlightSchools?.map((brand) => (
      <div
        key={brand.id}
        className="mx-4 sm:mx-8 flex items-center justify-center"
      >
        <img
          src={brand?.image}
          alt={`Brand ${brand.id}`}
          className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] object-contain"
        />
      </div>
    ))}
  </Marquee>
</div>

  );
};

export default BrandSection;
