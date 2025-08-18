import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useFormContext } from "react-hook-form";

// ⭐ StarRating Component
const StarRating = ({ name, readOnly = false }) => {
  const { watch, setValue } = useFormContext();
  const rating = watch(name);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => !readOnly && setHovered(i)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          onClick={() => !readOnly && setValue(name, i)}
          disabled={readOnly}
          className={`text-2xl transition-colors duration-200 ${
            i <= (hovered || rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <FaStar />
        </button>
      ))}
    </div>
  );
};

// 📝 ReviewForm Body (no form, no submit button)
const ReviewForm = () => {
  const { register } = useFormContext();

  return (
    <div className="border p-4 md:p-6 rounded-lg bg-white shadow-sm">
      {/* Anonymous Section */}
      <section className="mb-10 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Anonymous Review
        </h2>
        <div className="flex items-center mb-3">
          <input
            id="anonymous"
            type="checkbox"
            {...register("anonymous")}
            className="mr-2 h-4 w-4 text-blue-600"
          />
          <label htmlFor="anonymous" className="text-gray-700">
            Submit anonymously
          </label>
        </div>
      </section>

      {/* Headline Section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Section 1 - Write a Headline
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block mb-2 text-gray-700 font-medium">
            Add A Headline
          </label>
          <input
            type="text"
            {...register("headline")}
            placeholder="Please write a headline that summarises your experience"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Ratings Section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Section 2 - Ratings
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { name: "facilities_rating", label: "Facilities Rating" },
            { name: "customer_service_rating", label: "Customer Service Rating" },
            { name: "atmosphere_rating", label: "Atmosphere Rating" },
            { name: "communication_rating", label: "Communication Rating" },
            { name: "graduation_support_rating", label: "Graduation Support Rating" },
            { name: "student_support_rating", label: "Student Support Rating" },
            { name: "social_life_rating", label: "Social Life Rating" },
          ].map(({ name, label }) => (
            <div key={name} className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-2 text-gray-700 font-medium">{label}</div>
              <StarRating name={name} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewForm;
