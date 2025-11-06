import CommonBanner from "@/components/common/CommonBanner";
import React, { useState } from "react";
import aviationadvice from "@/assets/images/article.png";
import AllArticles from "@/components/Aviation_Advice_Components/AllArticles";
import CommonAds from "@/components/common/CommonAds";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/common/PaginationComponent";
const Article = () => {
  const [pageCount, setPageCount] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { data: article, isLoading } = useQuery({
    queryKey: ["articles", pageCount],
    queryFn: () =>
      axiosPublic.get("/articles", { params: { page: pageCount } }),
  });
  const { data: articleBanner, isLoading: bannerLoading } = useQuery({
    queryKey: ["articlesBanner"],
    queryFn: () => axiosPublic.get("/cms/aviation_article_page/banner_section"),
  });
  return (
    <div>
      <CommonBanner
        image={articleBanner?.data?.data?.banner_section?.image}
        title={articleBanner?.data?.data?.banner_section?.title}
      />
      <div className="section-padding-x py-16">
        <p
          className="p-3 bg-[#F3F4F6] rounded-md text-xl mb-10"
          dangerouslySetInnerHTML={{
            __html: articleBanner?.data?.data?.banner_section?.description,
          }}
        ></p>
        <AllArticles article={article} isLoading={isLoading} />
        <div className="flex justify-center mt-10">
          <PaginationComponent
            pageCount={article?.data?.meta?.last_page || 1}
            setPageCount={setPageCount}
            forcePage={pageCount}
          />
        </div>
      </div>
      <CommonAds />
    </div>
  );
};

export default Article;
