import React, { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function ResultsForm({ data }) {
  const { watch, setValue, register } = useFormContext();
  useEffect(() => {
    if (data?.data) {
      // ✅ Set values for each field separately
      setValue("cpl_test_first_time", data.data.cpl_test_first_time);
      setValue("meir_test_first_time", data.data.meir_test_first_time);
      setValue("atpl_theory_first_time", data.data.atpl_theory_first_time);
      setValue("atpl_average", data.data.atpl_average);
    }
  }, [data, setValue]);
  const radioOptions = [
    { value: "N/A", label: "N/A" },
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];

  const RadioGroup = ({ name, label }) => {
    const value = watch(name) || "";

    return (
      <div className="space-y-2">
        <h3 className="md:text-xl font-medium text-gray-800 mb-3">{label}</h3>
        {radioOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              checked={value === option.value}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="md:text-xl text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 border rounded-md">
      <div className="bg-gray-100 px-4 py-3 mb-6 rounded-sm">
        <h2 className="text-xl font-medium text-gray-800">
          Section 3 – Your Results
        </h2>
      </div>

      <div className="space-y-6">
        {/* CPL Test */}
        <RadioGroup
          name="cpl_test_first_time"
          label="Did you pass your CPL test first time?"
        />

        {/* MEIR Test */}
        <RadioGroup
          name="meir_test_first_time"
          label="Did you pass your MEIR test first time?"
        />

        {/* ATPL Theory */}
        <RadioGroup
          name="atpl_theory_first_time"
          label="Did you pass your ATPL theory exams first time?"
        />

        {/* ATPL Average */}
        <div>
          <h3 className="md:text-xl font-medium text-gray-800 mb-3">
            What was your ATPL Average?
          </h3>
          <div className="relative">
            <input
              type="number" // ✅ numeric input
              placeholder="Enter your average (e.g. 85)"
              {...register("atpl_average")}
              className="w-full px-3 py-2 md:text-xl border border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-gray-50 p-4 rounded-sm">
          <p className="text-gray-600 leading-relaxed">
            We would now like to ask you about your results with the ATO. Pilot
            Network respects your privacy therefore your answers to this section
            will not be shown on your review or profile. However they will be
            used to generate averages from past students for this ATO. If you
            would not like to answer these questions please select N/A.
          </p>
        </div>

        {/* Instructions */}
        <div className="text-gray-600 space-y-1">
          <p>(For a partial pass select YES)</p>
          <p>(If you had to re-take any exam please select NO)</p>
        </div>
      </div>
    </div>
  );
}
