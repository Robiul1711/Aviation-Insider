import Banner from "@/components/home_components/Banner";
import BannerBottom from "@/components/home_components/BannerBottom";
import BrandSection from "@/components/home_components/BrandSection";
import ContactForm from "@/components/home_components/ContactForm";
import ImageGallery from "@/components/home_components/ImageGallery";
import LatestArticles from "@/components/home_components/LatestArticles";
import LatestFlightSchool from "@/components/home_components/LatestFlightSchool";
import LeadingFlightSchool from "@/components/home_components/LeadingFlightSchool";
import LeaveReview from "@/components/home_components/LeaveReview";
import MoreFlightSchool from "@/components/home_components/MoreFlightSchool";
import OurPartner from "@/components/home_components/OurPartner";
import ParthnerLink from "@/components/parthner_Component/ParthnerLink";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerBottom />
      <LatestFlightSchool />
      <LeadingFlightSchool />
      <ImageGallery />
      <MoreFlightSchool />
      {/* <LeaveReview /> */}
      <LatestArticles />
      <ContactForm />
      <ParthnerLink />
    </div>
  );
};

export default Home;
