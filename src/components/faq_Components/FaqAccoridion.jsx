import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    question: "Pilot Network General Frequently Asked Questions",
    answer:
      "Our General FAQs section is here to provide clear, concise answers to the most common questions asked by aspiring and current pilots. Whether you're just beginning your aviation journey or already enrolled in a training program, this section is designed to support you with trusted information, gathered from real experiences and expert insights.",
  },
  {
    id: 2,
    question: "How do I choose the right flight school?",
    answer:
      "Compare school accreditations, training programs, instructor-to-student ratio, and reviews from current or past students.",
  },
  {
    id: 3,
    question: "What licenses do I need to become a commercial pilot?",
    answer:
      "You typically need a PPL, CPL, and ATPL theory or a full ATPL depending on the country's aviation authority.",
  },
  {
    id: 4,
    question: "How much does flight training cost?",
    answer:
      "Flight training can range from $50,000 to $150,000 depending on the country, school, and type of program (integrated or modular).",
  },
  {
    id: 5,
    question: "Can I become a pilot without a degree?",
    answer:
      "Yes, a university degree is not required to become a pilot, but it can help with airline hiring qualifications.",
  },
  {
    id: 6,
    question: "What are modular and integrated courses?",
    answer:
      "Modular allows training step-by-step and at your own pace. Integrated is full-time, intensive training in one go.",
  },
  {
    id: 7,
    question: "Is there a minimum age requirement?",
    answer:
      "Yes, you must be at least 16 for a student pilot license and 18 for a commercial pilot license (CPL).",
  },
  {
    id: 8,
    question: "Do I need perfect vision to become a pilot?",
    answer:
      "No, but you must meet aviation medical standards. Corrective lenses are usually acceptable.",
  },
  {
    id: 9,
    question: "What is the difference between CPL and ATPL?",
    answer:
      "A CPL allows you to work as a paid pilot. An ATPL is required to become a captain in an airline.",
  },
  {
    id: 10,
    question: "Can international students train in the US/UK?",
    answer:
      "Yes, many schools accept international students. You may need a visa and meet local medical requirements.",
  },
  {
    id: 11,
    question: "How long does it take to become a pilot?",
    answer:
      "Training duration varies, but on average it takes 1.5 to 2 years to become job-ready as a commercial pilot.",
  },
];

const FaqAccoridion = () => {
  return (
    <div className='section-padding-x py-16'>
      <Accordion
        type="single"
        collapsible
        className="w-full   "
        defaultValue="item-1"
      >
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`} className={"my-3 bg-[#F3F4F6] px-5 rounded-md"}>
            <AccordionTrigger className="text-xl font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-base">
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccoridion;
