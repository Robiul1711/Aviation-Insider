import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const StudentsWentOnWork = ({ SchoolDetail }) => {
  const graduates = SchoolDetail?.graduate_information || [];

  return (
    <div className="overflow-hidden w-full md:py-12 py-6 section-padding-x">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-Primary">
        Our Graduates Work With
      </h2>

      <Marquee pauseOnHover speed={40} gradient={false}>
        {graduates.map((grad) => (
          <div
            key={grad.id}
            className="mx-6 sm:mx-10 border  rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg  w-[280px] sm:w-[350px] flex flex-col items-center text-center"
          >
            {/* Logo */}
            <img
              src={grad?.logo_path}
              alt={grad?.airline_name}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain mb-4"
            />

            {/* Airline Name */}
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {grad?.airline_name}
            </h3>

            {/* Description */}
            <p
              className="text-sm text-black mt-2 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: grad?.description }}
            />

            {/* Website Link */}
            {grad?.website_url && (
              <Link
                to={grad?.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm font-medium text-Primary hover:underline"
              >
                Visit Website →
              </Link>
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default StudentsWentOnWork;
