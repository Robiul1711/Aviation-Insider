import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const FaqAccoridion = () => {
    const axiosPublic = useAxiosPublic();
  const { data: faq } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/faqs");
      return res.data;
    },
  });
  return (
    <div className='section-padding-x py-5 md:py-16'>
      <Accordion
        type="single"
        collapsible
        className="w-full   "
        defaultValue="item-1"
      >
        {faq?.data?.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`} className={"my-3 bg-[#F3F4F6] px-5 rounded-md"}>
            <AccordionTrigger className="sm:text-lg md:text-xl font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-sm md:text-base">
              <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccoridion;
