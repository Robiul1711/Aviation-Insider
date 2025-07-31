import React from "react";
import medical from "@/assets/images/medical.png";
import insurance from "@/assets/images/insurance.png";
import { Link } from "react-router-dom";
const articleData = [
  {
    id: 1,
    image: medical,
    title: "Insurance for students and pilots",
    description:
      "There are many websites with information on insurance, as well as adverts here there and everywhere, but what should…",
  },
  {
    id: 2,
    image: insurance,
    title: "Insurance",
    description: "Everything you need to know about insurance",
    
  },
  {
    id: 3,
    image: medical,
    title: "Training",
    description: "Everything you need to know about training",

  },
  {
    id: 4,
    image: insurance,
    title: "Licensing",
    description: "Everything you need to know about licensing",
    
  },
  {
    id: 5,
    image: medical,
    title: "Career",
    description: "Everything you need to know about career"
  },
];
const AllAdviceAricle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {articleData.map((article) => (
        <Link 
          to={`/aviation-advice-details/${article.id}`}
          key={article.id}
          className="w-full   shadow-lg  bg-[#F3F4F6]  rounded"
        >
          <img src={article.image} alt="" className="w-full object-cover " />
          <div className="p-4   ">
            <h2 className="font-semibold text-xl text-Secondary">
              {article.title}
            </h2>

            <p className=" mt-2 text-gray-700">{article.description}</p>
          
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllAdviceAricle;