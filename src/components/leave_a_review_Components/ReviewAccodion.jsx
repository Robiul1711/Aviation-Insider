import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";
import { useFormContext } from "react-hook-form";

// ⭐ RatingRow with FormContext
const RatingRow = ({ name, label }) => {
  const { watch, setValue } = useFormContext();
  const rating = watch(name) || 0;

  return (
    <div className="flex flex-col gap-1 w-full sm:w-1/3">
      <p className="font-medium">{label}</p>
      <div className="flex gap-1 cursor-pointer">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={20}
            fill={i <= rating ? "#FBBF24" : "none"}
            stroke="#FBBF24"
            onClick={() => setValue(name, i)}
            className="hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

const ReviewAccordion = ({ data }) => {
  const { setValue } = useFormContext();

  useEffect(() => {
    if (data?.data) {
      // Map all ratings dynamically from each section
      const sectionsData = ["aircraft", "simulator", "theory", "practical"];
      sectionsData.forEach((section) => {
        const items = data.data.sections?.[section]?.items || {};
        Object.entries(items).forEach(([key, value]) => {
          setValue(key, value);
        });
      });
    }
  }, [data, setValue]);

  const sections = [
    {
      id: 1,
      question: "Review Aircraft Section",
      answer: "If you used aircraft at this school, please check the box below",
      ratings: [
        { name: "aircraft_overall_rating", label: "Aircraft Overall Rating" },
        { name: "aircraft_availability_rating", label: "Aircraft Availability Rating" },
        { name: "aircraft_reliability_rating", label: "Aircraft Reliability Rating" },
        { name: "aircraft_age_rating", label: "Aircraft Age Rating" },
        { name: "aircraft_maintenance_rating", label: "Aircraft Maintenance Rating" },
      ],
    },
    {
      id: 2,
      question: "Review Simulators Section",
      answer: "If you used simulators at this school, please check the box below",
      ratings: [
        { name: "simulator_overall_rating", label: "Simulator Overall Rating" },
        { name: "simulator_availability_rating", label: "Simulator Availability Rating" },
        { name: "simulator_reliability_rating", label: "Simulator Reliability Rating" },
        { name: "simulator_age_rating", label: "Simulator Age Rating" },
        { name: "simulator_maintenance_rating", label: "Simulator Maintenance Rating" },
      ],
    },
    {
      id: 3,
      question: "Review Theory Section",
      answer: "If you studied theory at this school, please check the box below",
      ratings: [
        { name: "theory_quality_instruction", label: "Quality of Instruction" },
        { name: "theory_instructors_per_student", label: "Instructors per Student" },
        { name: "theory_extra_tuition_support", label: "Extra Tuition Support" },
        { name: "theory_value_for_money", label: "Value for Money" },
        { name: "theory_learning_material", label: "Learning Material Rating" },
        { name: "theory_classroom_overall", label: "Classroom Overall Rating" },
        { name: "theory_class_size", label: "Class Size Rating" },
        { name: "theory_class_life_balance", label: "Class/Life Balance Rating" },
      ],
    },
    {
      id: 4,
      question: "Review Practical Training",
      answer: "If you studied practical training at this school, please check the box below",
      ratings: [
        { name: "practical_quality_instruction", label: "Quality of Practical Instruction Rating" },
        { name: "practical_school_manual", label: "School Manuals Rating" },
        { name: "practical_lesson_regularity", label: "Lesson Regularity Rating" },
        { name: "practical_lesson_scheduling", label: "Lesson Scheduling Rating" },
        { name: "practical_instructor_per_student", label: "Practical Instructors per Student" },
        { name: "practical_sop", label: "SOP Rating" }, // optional if exists
      ],
    },
  ];

  return (
    <div className="py-5 md:py-10">
      <Accordion type="single" collapsible className="w-full rounded-md" defaultValue="item-1">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={`item-${section.id}`} className="my-3 border rounded-md">
            <AccordionTrigger className="md:text-xl text-lg font-semibold bg-[#F3F4F6] px-5">
              {section.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 py-4 text-base">
              <div className="flex flex-wrap gap-6">
                {section.ratings.map((r) => (
                  <RatingRow key={r.name} name={r.name} label={r.label} />
                ))}
              </div>
              <p className="mt-6 italic text-sm text-gray-600">{section.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ReviewAccordion;
