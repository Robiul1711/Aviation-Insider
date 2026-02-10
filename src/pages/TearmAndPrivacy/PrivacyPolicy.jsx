import { useParams } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PrivacyPolicy = () => {
  const axiosPublic = useAxiosPublic();

  const { data: pageData, isLoading } = useQuery({
    queryKey: ["dynamicPage"],
    queryFn: () => axiosPublic.get(`/dynamic-page?slug=privacy-policy`),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-Primary mb-8 lg:mb-16 text-center">
          {pageData?.data?.data?.page_title}
        </h1>

        <section className="">
          <div
            className="prose prose-slate lg:prose-lg max-w-none 
                   prose-headings:font-bold 
                   prose-a:text-blue-600 hover:prose-a:text-blue-500
                   prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{
              __html: pageData?.data?.data?.page_content || "",
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
