import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Title from "../common/Title";
import CommonButton from "../common/CommonButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const LatestArticles = () => {
  const axiosPublic = useAxiosPublic();

  const { data: latestArticles, isLoading } = useQuery({
    queryKey: ["latest-articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      return res.data;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  // ✅ Take only latest 5
  const articles = latestArticles?.data?.slice(0, 6) || [];

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="section-gap section-padding-x py-8 md:py-16">
      {/* Heading */}
      <div className="flex w-full justify-center mb-10 items-center">
        <Title level="title40" className="!text-center">
          Latest Articles
        </Title>
      </div>

      {/* Simple Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <Link
            to={`/aviation-article-details/${item.id}`}
            className="flex flex-col bg-[#E9EAEB] rounded-lg overflow-hidden"
            key={item.id}
          >
            <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <Title level="title20" className="text-[#010101] line-clamp-1">
                {item.title}
              </Title>
              <Title level="title16" className="text-[#010101] line-clamp-2">
                {item.description}
              </Title>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-700" />
                <Title level="title16" className="!text-[#010101]">
                  {item.published_at}
                </Title>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <CommonButton
        className="!mt-10 text-center mx-auto block"
        variant="secondary"
        onClick={() => (window.location.href = "/aviation-articles")}
      >
        More Articles
      </CommonButton>
    </div>
  );
};

export default LatestArticles;
