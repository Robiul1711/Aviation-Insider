import React from "react";
import anouthero from "../../assets/images/abouthero.png";
import Title from "../common/Title";

const AboutHero = () => {
  return (
    <div className="section-padding-x flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 py-10 md:py-16 bg-Secondary">
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <Title level="title20" className="text-white">
          Pilot Network was constructed from the idea of there being one place
          where all future and current pilots can go to find out about their
          flight training needs and requirements, ranging from where and who to
          train with, to budgeting financially.
          <br /> <br />
          Europe's biggest comprehensive and extensive flight school reviews and
          comparison platform.
          <br /> <br />
          We aim to provide you with an extensive database of flight schools,
          combined with reviews submitted by pilots, along with a dedicated blog
          section with regular publications of articles and advice to help you
          as best as we can. It serves as an aid to enable better decision
          making, based upon comprehensive and accurate information, in your
          journey to the flight deck.
        </Title>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={anouthero}
          alt="About Hero"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutHero;
