import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const VTPSFAQSection = () => {
  const axiosPublic = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["triningproviderQustions"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/cms/verified_school_page/question_section"
      );
      return res.data;
    },
  });
  const { data:table } = useQuery({
    queryKey: ["triningproviderTable"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/cms/verified_school_page/table_section"
      );
      return res.data;
    },
  });
console.log(table?.data?.table_section)
  // Convert object → array
  const faqItems = data?.data?.question_section
    ? Object.values(data.data.question_section)
    : [];

  return (
    <div className="section-padding-x p-6 bg-white space-y-6">
      {faqItems.map((item, index) => (
        <div key={index}>
          {/* Question */}
          <div className="bg-Secondary-light text-white px-4 py-3 lg:text-lg font-medium">
            {item?.question}
          </div>

          {/* Answer (HTML supported) */}
          <div
            className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: item?.answer }}
          />
        </div>
      ))}
            {/* Contact Information */}
      <div className="bg-gray-50 p-4 lg:text-lg text-gray-700 leading-relaxed">
<span dangerouslySetInnerHTML={{ __html: table?.data?.table_section?.description }}></span>
      </div>


    </div>
  );
};

export default VTPSFAQSection;
