import React from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "../common/CardSkeleton";

const AllArticles = ({ article, isLoading }) => {
const articles = Array.isArray(article?.data?.data) ? article.data.data : [];
  if (isLoading) return <CardSkeleton count={8} />;

  if (!articles.length) return <p>No articles found.</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {articles?.map((article) => (
        <Link 
          to={`/aviation-article-details/${article.slug}`}
          key={article.id}
          className="w-full   shadow-lg  bg-[#F3F4F6]  rounded"
        >
          <img src={article.image} alt="" className="w-full object-cover " />
          <div className="p-4   ">
            <h2 className="font-semibold text-xl text-Secondary">
              {article.title}
            </h2>

           <p
  className="mt-2 text-gray-700 line-clamp-3"
  dangerouslySetInnerHTML={{ __html: article.description }}
></p>
          
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllArticles;
