import React from "react";
import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";
const StudentsWentOnWork = ({SchoolDetail}) => {
  console.log(SchoolDetail?.career_placements);

  return (
      <div className="overflow-hidden w-full md:py-12 py-6 section-padding-x">
  <Marquee pauseOnHover speed={40}>
    {SchoolDetail?.career_placements?.map((brand, index) => (
      <Link
        to={SchoolDetail?.career_placements?.website_url}
        key={index}
        className="mx-4 sm:mx-8 flex items-center justify-center"
      >
        <img
          src={brand?.image}
          alt={`Brand ${brand.id}`}
          className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] object-contain"
        />
      </Link>
    ))}
  </Marquee>
</div>

  );
};

export default StudentsWentOnWork;
