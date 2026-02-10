import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const StudentsWentOnWork = ({ SchoolDetail }) => {
  const graduates = SchoolDetail?.graduate_information || [];

  return (
    <>
      {graduates.length > 0 && (
        <div className="overflow-hidden w-full md:pt-12 pt-6 section-padding-x">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-Primary">
            Our Graduates Work With
          </h2>

          <Marquee pauseOnHover speed={40} gradient={false}>
            {graduates.map((grad) => (
              <div
                key={grad.id}
                className="mx-4 sm:mx-8 lg:mx-12"
              >
                {/* Logo */}
                <img
                  src={grad?.logo_path}
                  alt={grad?.airline_name}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]  object-contain"
                />

{/*          
                <h3 className="text-lg sm:text-xl font-semibold ">
                  {grad?.airline_name}
                </h3>

           
                <p
                  className="text-sm text-black mt-2 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: grad?.description }}
                /> */}
{/* {console.log(grad)} */}
                {/* Website Link */}
                {/* {grad?.website_url && (
                  <Link
                    to={grad?.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-medium text-Primary hover:underline"
                  >
                    Visit Website →
                  </Link>
                )} */}
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </>
  );
};

export default StudentsWentOnWork;
