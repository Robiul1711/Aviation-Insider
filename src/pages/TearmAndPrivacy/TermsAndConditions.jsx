import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const TermsAndConditions = () => {
    const axiosPublic = useAxiosPublic();

  const { data: terms, isLoading } = useQuery({
    queryKey: ["dynamicPage"],
    queryFn: () => axiosPublic.get(`/dynamic-page?slug=terms-condition`),

  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-Primary mb-8 lg:mb-16 text-center">
         {terms?.data?.data?.page_title}
        </h1>


        {/* Contact */}
        <section className="mb-6">
    <div 
        className="prose prose-slate lg:prose-lg max-w-none 
                   prose-headings:font-bold 
                   prose-a:text-blue-600 hover:prose-a:text-blue-500
                   prose-img:rounded-xl prose-img:shadow-lg"
        dangerouslySetInnerHTML={{
          __html: terms?.data?.data?.page_content || "",
        }}
      />
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;
