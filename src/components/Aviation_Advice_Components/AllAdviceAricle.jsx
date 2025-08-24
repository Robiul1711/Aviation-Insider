import React from "react";
import CardSkeleton from "../common/CardSkeleton";
import { Link } from "react-router-dom";

const AllAdviceAricle = ({ articleData, isLoading }) => {
  const articles =
    articleData?.data?.data && Array.isArray(articleData.data.data)
      ? articleData.data.data
      : articleData?.data && Array.isArray(articleData.data)
      ? articleData.data
      : [];

  if (isLoading) return <CardSkeleton count={8} />;

  if (!articles.length) return <p>No articles found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {articles.map((article) => (
        <Link
          to={`/aviation-advice-details/${article.id}`}
          key={article.id}
          className="w-full shadow-lg bg-[#F3F4F6] rounded"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 object-cover rounded-t"
          />
          <div className="p-4">
            <h2 className="font-semibold text-xl text-Secondary">
              {article.title}
            </h2>
            <p
              className="mt-2 text-gray-700 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: article.description }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
export default AllAdviceAricle;
