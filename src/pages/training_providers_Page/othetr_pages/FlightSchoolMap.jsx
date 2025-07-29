import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import triningprovider from "@/assets/images/schoolmap.png";
import Title from "@/components/common/Title";
import CommonAds from "@/components/common/CommonAds";
import OtherCommonLinks from "@/components/common/OtherCommonLinks";

const FlightSchoolMap = () => {
  return (
    <div>
      <CommonBanner image={triningprovider} title="Flight School - Map" />
      <div className="section-padding-x md:pb-10">
        <Title level="title20" className="text-black  py-10">
          Below is a map of the variety of schools available across Europe on
          our database. A local school may allow you to save money on travel and
          accommodation costs. If you click on a school you will be able to find
          out more about them and read reviews.
          <br /> <br />
          We are regularly updating the listings, if your school is missing
          please feel free to contact us.
        </Title>

        <div className="md:mt-10 ">
          <iframe
  className="w-full h-[350px] sm:h-[500px] border-0 rounded-lg"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.2783564440343!2d-87.91294788455449!3d41.97416287921898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb4276a7762f3%3A0x511747070259ad4b!2sO'Hare%20International%20Airport!5e0!3m2!1sen!2sus!4v1721194293649!5m2!1sen!2sus"
/>

        </div>
      </div>
      <OtherCommonLinks
        className={
          "flex flex-wrap justify-center items-center gap-5 section-padding-x py-14"
        }
      />
      <CommonAds />
    </div>
  );
};

export default FlightSchoolMap;
