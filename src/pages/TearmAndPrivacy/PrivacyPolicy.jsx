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
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-Primary mb-6 text-center">
          {pageData?.data?.data?.page_title}
        </h1>

        <section className="mb-6">
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.data?.data?.page_content,
            }}
          ></div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
