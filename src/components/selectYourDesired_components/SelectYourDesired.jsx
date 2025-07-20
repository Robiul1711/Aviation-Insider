import Title from "@/components/common/Title";
import React from "react";
import desire1 from "@/assets/images/desire1.jpeg";
import desire2 from "../../assets/images/desire2.jpeg";
import desire3 from "../../assets/images/desire3.jpeg";
import { Link } from "react-router-dom";
const SelectYourDesired = () => {
    const data = [
      {
        id: 1,
        link: "/military",
        name: "Military",
        image: desire1,
      },
      {
        id: 2,
        link: "/recreational",
        name: "Recreational",
        image: desire2,
      },
      {
        id: 3,
        link: "/commercial-flying",
        name: "Commercial Flying",
        image: desire3,
      },
    ]
  return (
    <div className="section-padding-x py-16">
      <Title level="title40" className="text-black text-center">
        Select Your Desired Flight Path
      </Title>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {
          data.map((item) => (
               <Link to={item.link} key={item.id} className="w-full  rounded-md relative group overflow-hidden">
          {/*  image  */}
          <img
            src={item.image}
            alt="animated_cards"
            className="w-full h-[450px] object-cover"
          />

          {/*  texts  */}
          <div className="flex flex-col h-[100px] items-center justify-center bg-Secondary/20 backdrop-blur-md text-white absolute bottom-0 w-full ">
            <h3 className="text-[1.7rem]  font-bold tracking-[5px] leading-[30px] ">
              {item.name}
            </h3>
        
          </div>
        </Link>
          ))
        }
     
      </div>
    </div>
  );
};

export default SelectYourDesired;
