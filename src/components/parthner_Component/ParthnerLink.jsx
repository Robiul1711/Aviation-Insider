import React from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";
import p6 from "../../assets/images/p6.png";
import p7 from "../../assets/images/p7.png";
import p8 from "../../assets/images/p8.png";
import p9 from "../../assets/images/p9.png";
import p10 from "../../assets/images/p10.png";
import Title from "../common/Title";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: p1,
    link: "https://www.aviationinsider.com",
    discription:
      "Aviation Insider provide quality training via their website and app which consists of their online courses from question banks and revision content, to managing all simulator-based training that may be required throughout the life of a pilot’s career.",
  },
  {
    id: 2,
    image: p2,
    link: "https://ifrsimulator.com",
    discription:
      "Trusted by thousands of IFR pilots worldwide, IFR Flight Simulator is your ultimate mobile companion for realistic, effective, and convenient IFR training. Master essential IFR procedures anytime, anywhere—perfect for student pilots aiming to gain confidence or experienced pilots keeping their skills sharp.",
  },
  {
    id: 3,
    image: p3,
    link: "www.pooleys.com",
    discription:
      "Pooleys has become a well respected name in the Aviation Industry, not just in the UK but globally, as a leading manufacturer and publisher of Aviation, Pilot Training and Flight Equipment. Pooleys now sell over 2750 products worldwide including many of the world's most recognisable aviation brands. Use code ‘pilotnetwork5’ at the checkout for discounts on all eligible products.",
  },
  {
    id: 4,
    image: p4,
    link: "https://coradine.com/logten4pilot-network/",
    discription:
      "Coradine's LogTen Pro is the most complete digital pilot logbook for iPhone, iPad, Apple Watch and Mac. It includes digital signatures, currency tracking and endorsements while you are a student / instructor ... then flight, duty, rest limits tracking and a lot more when you land in the FO's seat.Our partnership with LogTen pro gets all Pilot Network users an extended 3 month trial of LogTen Pro and an ongoing discount of up to 23% off! As users of Pilot Network you can take advantage of this exclusive extended trial and discount on sign up using the link below:",
  },
  {
    id: 5,
    image: p5,
    link: "https://www.armstrongaviationclothing.co.uk",
    discription:
      "Armstrong Aviation Clothing are one of the largest specialist suppliers of uniforms to commercial aviation, business & private airlines, pilots, flight & ground engineers and airports around the globe. Our large range of aviation clothing, accessories and uniforms for pilots and crew are well known and trusted for their quality and durability. Use code ‘pilotnetwork’ at the checkout for discounts on all eligible products.",
  },
  {
    id: 6,
    image: p6,
    link: "www.symbioticsltd.com",
    discription:
      "Symbiotics' pilot aptitude tests are trusted by Airlines and Aviation Training Organisations all over the world. Our practice assessments give you the opportunity to have a go at the assessments prior to requiring to take one during the pilot recruitment process or as part of your training.",
  },
  {
    id: 7,
    image: p7,
    link: "https://bigjet.tv",
    discription:
      "BIG JET TV provide live shows from around the UK, Europe and America, not limited solely to Civilian aviation, he also streams military aviation among others.",
  },
  {
    id: 8,
    image: p8,
    link: "www.airlineprep.co.uk",
    discription:
      "Airline Prep are industry leading airline assessment specialists providing bespoke support to pilots both in airline assessments and flight school assessments. They are the only airline interview and assessment training provider associated to BALPA.",
  },
  {
    id: 9,
    image: p9,
    link: "www.ukflying.com",
    discription:
      "UKFlying provide a wide range of advice and services to pilots at all stages of their training. They offer advice to military pilots on bespoke conversions to civilian flying plus all the latest information on UK CAA and EASA Licences and Ratings.",
  },
  {
    id: 10,
    image: p10,
    link: "https://pilot-network.com/plus-schools",
    discription:
      "All of our Enhanced Profile Flight Schools are committed to providing the most accurate information for prospective students so that all, no matter their background, can find the appropriate schools and courses for themselves.",
  },
];

const ParthnerLink = () => {
  return (
    <div className="section-padding-x py-16">
      <Title level="title40" className="text-black text-center mb-14">
        OUR PARTNERS
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-4 bg-white p-6 rounded-md shadow border"
          >
            <img
              src={item.image}
              alt={`partner-${item.id}`}
              className="w-20 sm:w-28 md:w-40 object-contain rounded-md"
            />
            {item.discription && (
              <Title level="title16" className="text-[#111827] !font-normal">
                {item.discription}
              </Title>
            )}
            {item.link && (
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-Secondary text-lg underline  break-all"
              >
                {item.link}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParthnerLink;
