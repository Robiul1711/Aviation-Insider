import React from "react";
import Title from "../common/Title";

const AboutDetails = () => {
  return (
    <div className="section-padding-x pt-10 md:pt-0 md:py-16">
      <Title level="title20" className="text-black text-center">
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
        section with regular publications of articles and advice to help you as
        best as we can. It serves as an aid to enable better decision making,
        based upon comprehensive and accurate information, in your journey to
        the flight deck.
        <br /> <br />
        The Pilot Network Team
      </Title>
      <div className="mt-10 border-t-2  border-black py-8 border-b-2 ">
        <Title level="title20" className="text-black text-center">
          Pilot-Network.com is a trading name of Aviation Insider Ltd.
          <br /> <br />
          Company registered in England & Wales number 10462227
          <br /> <br />
          'Pilot Network' and the Pilot Network logo are Registered Trade Marks
          (UKIPO 3252488){" "}
        </Title>
      </div>
    </div>
  );
};

export default AboutDetails;
