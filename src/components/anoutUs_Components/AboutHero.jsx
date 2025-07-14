import React from "react";
import anouthero from "../../assets/images/abouthero.png";
import Title from "../common/Title";
const AboutHero = () => {
  return (
    <div className="section-padding-x flex justify-center items-center gap-20 py-16 bg-Secondary">
      <div className="w-1/2">
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
      <div className="w-1/2">
        <img src={anouthero} alt="" />
      </div>
    </div>
  );
};

export default AboutHero;
