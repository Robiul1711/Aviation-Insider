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
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-Primary mb-6 text-center">
         {terms?.data?.data?.page_title}
        </h1>


        {/* Contact */}
        <section className="mb-6">
          <div
            dangerouslySetInnerHTML={{
              __html: terms?.data?.data?.page_content,
            }}
          ></div>
        </section>

      </div>
    </div>
  );
};

export default TermsAndConditions;
