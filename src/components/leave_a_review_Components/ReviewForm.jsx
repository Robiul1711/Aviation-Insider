import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

// StarRating Component
const StarRating = ({ rating, onChange, readOnly = false }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => !readOnly && setHovered(i)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          onClick={() => !readOnly && onChange(i)}
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

// ReviewForm Component
const ReviewForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [headline, setHeadline] = useState("");
  const [ratings, setRatings] = useState({
    facilities1: 4,
    facilities2: 5,
    facilities3: 2,
    facilities4: 0,
    facilities5: 3,
    facilities6: 1,
    facilities7: 5,
  });

  const handleRatingChange = (key, value) => {
    setRatings((prev) => ({ ...prev, [key]: value }));
  };

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
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="mr-2 h-4 w-4 text-blue-600"
          />
          <label htmlFor="anonymous" className="text-gray-700">
            Submit anonymously
          </label>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          If you would like to leave a review anonymously, please select the box.
          After moderation, Pilot Network will contact you for supporting documents.
        </p>
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
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
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
            { key: "facilities1", label: "Facilities Rating 4" },
            { key: "facilities2", label: "Facilities Rating 5" },
            { key: "facilities3", label: "Facilities Rating 2" },
            { key: "facilities4", label: "Facilities Rating 0" },
            { key: "facilities5", label: "Facilities Rating 3" },
            { key: "facilities6", label: "Facilities Rating 1" },
          ].map(({ key, label }) => (
            <div key={key} className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-2 text-gray-700 font-medium">{label}</div>
              <StarRating
                rating={ratings[key]}
                onChange={(value) => handleRatingChange(key, value)}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="mb-2 text-gray-700 font-medium">
              Facilities Rating 5
            </div>
            <StarRating
              rating={ratings.facilities7}
              onChange={(value) => handleRatingChange("facilities7", value)}
            />
          </div>
          <div className="text-gray-600 text-sm p-2 leading-relaxed">
            Please rate only the areas relevant to your training. Use the scale below:
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <section className="mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { count: 1, label: "Unsatisfactory", color: "red" },
            { count: 2, label: "Satisfactory", color: "orange" },
            { count: 3, label: "Good", color: "yellow" },
            { count: 4, label: "Very Good", color: "green" },
            { count: 5, label: "Perfect", color: "blue" },
          ].map(({ count, label, color }) => (
            <div
              key={label}
              className={`text-center p-4 bg-${color}-100 rounded-lg`}
            >
              <div
                className={`text-${color}-500 text-2xl flex justify-center mb-2 gap-1`}
              >
                {Array.from({ length: count }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div
                className={`text-${color}-600 font-medium text-base`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewForm;
