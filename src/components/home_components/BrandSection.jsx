import React from "react";
import image1 from "@/assets/images/b1.png";
import image2 from "@/assets/images/b2.png";
import image3 from "@/assets/images/b3.png";
import image4 from "@/assets/images/b4.png";
import image5 from "@/assets/images/b5.png";
import image6 from "@/assets/images/b6.png";
import image7 from "@/assets/images/b7.png";
import image8 from "@/assets/images/b8.png";
import Marquee from "react-fast-marquee";
import Title from "../common/Title";
import CommonButton from "../common/CommonButton";

const BrandSection = () => {
  const brands = [
    { id: 1, brand: image1 },
    { id: 2, brand: image2 },
    { id: 3, brand: image3 },
    { id: 4, brand: image4 },
    { id: 5, brand: image5 },
    { id: 6, brand: image6 },
    { id: 7, brand: image7 },
    { id: 8, brand: image8 },
  ];

  return (
    <div className="py-12 section-padding-x">
      <div className="">
        <Marquee pauseOnHover speed={40}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="mx-6 sm:mx-10 flex items-center justify-center"
            >
              <img
                src={brand.brand}
                alt={`Brand ${brand.id}`}
                className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] object-contain "
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-20 mx-auto flex flex-col items-center gap-5">
        <Title level="title40" className="text-black text-center">
        The Leading Flight School Review Website
        </Title>
        <Title level="title20" className="text-black text-center max-w-6xl mx-auto ">
       Pilot Network Plus allows flight schools the ability to market themselves directly to our thousands of monthly website visitors with custom images, videos and over 35 editable sections of information. Click below to find out more.
        </Title>
        <CommonButton variant="secondary" onClick={() => window.location.href = "/about"}>Find Out More</CommonButton>
      </div>
    </div>
  );
};

export default BrandSection;
