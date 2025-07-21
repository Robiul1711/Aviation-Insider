import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

const RatingRow = ({ title, rating, onRate }) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-1/3">
      <p className="font-medium">{title}</p>
      <div className="flex gap-1 cursor-pointer">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={20}
            fill={i <= rating ? "#FBBF24" : "none"} // Filled if active
            stroke="#FBBF24"
            onClick={() => onRate(i)}
            className="hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

const ReviewAccordion = () => {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: "Review Aircraft Section",
      answer: "If you used aircraft at this school, please check the box below",
      ratings: [
        { title: "Aircraft Overall Rating", rating: 4 },
        { title: "Aircraft Availability Rating", rating: 5 },
        { title: "Aircraft Reliability Rating", rating: 3 },
        { title: "Aircraft Age Rating", rating: 1 },
        { title: "Aircraft Maintenance Rating", rating: 3 },
      ],
    },
    {
      id: 2,
      question: "Review Simulators Section",
      answer: "If you used simulators at this school, please check the box below",
      ratings: [
        { title: "Simulator Age Rating", rating: 4 },
        { title: "Simulator Maintenance Rating", rating: 5 },
        { title: "Simulator Reliability Rating", rating: 3 },
        { title: "Simulator Availability Rating", rating: 1 },
        { title: "Simulator Overall Rating", rating: 3 },
      ],
    },
    {
      id: 3,
      question: "Review Theory Section",
      answer: "If you studied theory at this school, please check the box below",
      ratings: [
        { title: "Quality of Instruction", rating: 4 },
        { title: "Instructors per Student", rating: 5 },
        { title: "Extra Tuition Support", rating: 3 },
        { title: "Value for Money", rating: 1 },
        { title: "Learning Material Rating", rating: 3 },
        { title: "Classroom Overall Rating", rating: 2 },
        { title: "Class Size Rating", rating: 1 },
        { title: "Class/Life Balance Rating", rating: 2 },
      ],
    },
    {
      id: 4,
      question: "Review Practical Training",
      answer: "If you studied theory at this school, please check the box below",
      ratings: [
        { title: "Quality of Practical Instruction Rating", rating: 4 },
        { title: "School Manuals Rating", rating: 5 },
        { title: "Lesson Regularity Rating", rating: 3 },
        { title: "Standard Operating Procedures Rating", rating: 1 },
        { title: "Practical Instructors per Student", rating: 3 },
        { title: "Lesson Scheduling Rating", rating: 2 },
      ],
    },
  ]);

  // Handle rating update
  const updateRating = (sectionIndex, ratingIndex, newRating) => {
    setFaqData((prev) => {
      const updated = [...prev];
      updated[sectionIndex].ratings[ratingIndex].rating = newRating;
      return updated;
    });
  };

  return (
    <div className="py-10">
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-md"
        defaultValue="item-1"
      >
        {faqData.map((faq, sectionIdx) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="my-3 border rounded-md"
          >
            <AccordionTrigger className="text-xl font-semibold bg-[#F3F4F6] px-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4 text-base">
              <div className="flex flex-wrap gap-6">
                {faq.ratings.map((r, ratingIdx) => (
                  <RatingRow
                    key={ratingIdx}
                    title={r.title}
                    rating={r.rating}
                    onRate={(newRating) =>
                      updateRating(sectionIdx, ratingIdx, newRating)
                    }
                  />
                ))}
              </div>
              <p className="mt-6 italic text-sm text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ReviewAccordion;
