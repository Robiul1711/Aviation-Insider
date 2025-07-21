import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

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

const ReviewForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [headline, setHeadline] = useState("");
  const [ratings, setRatings] = useState({
    rating4: 4,
    rating5: 5,
    rating2: 2,
    rating0: 0,
    rating3: 3,
    rating1: 1,
    rating5_2: 5,
  });

  const handleRatingChange = (key, value) => {
    setRatings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="border p-6 rounded-lg">
      {/* Anonymous Review Section */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Anonymous Review
        </h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="anonymous"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="mr-3 h-4 w-4 text-blue-600"
          />
          <label htmlFor="anonymous" className="text-gray-700">
            Anonymous
          </label>
        </div>
        <p className="text-lg text-gray-600">
          If you would like to leave a review anonymously please select the box
          below. Once your review passes moderation Pilot Network will contact
          you for a supporting document to verify your review.
        </p>
      </div>

      {/* Section 1 - Write a Headline */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Section 1 - Write a Headline
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-lg font-medium text-gray-700 mb-2">
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
      </div>

      {/* Section 2 - Ratings */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">
          Section 2 - Ratings
        </h3>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* First Row */}
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 4
            </div>
            <StarRating
              rating={ratings.rating4}
              onChange={(value) => handleRatingChange("rating4", value)}
            />
          </div>
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 5
            </div>
            <StarRating
              rating={ratings.rating5}
              onChange={(value) => handleRatingChange("rating5", value)}
            />
          </div>
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 2
            </div>
            <StarRating
              rating={ratings.rating2}
              onChange={(value) => handleRatingChange("rating2", value)}
            />
          </div>

          {/* Second Row */}
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 0
            </div>
            <StarRating
              rating={ratings.rating0}
              onChange={(value) => handleRatingChange("rating0", value)}
            />
          </div>
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 3
            </div>
            <StarRating
              rating={ratings.rating3}
              onChange={(value) => handleRatingChange("rating3", value)}
            />
          </div>
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 1
            </div>
            <StarRating
              rating={ratings.rating1}
              onChange={(value) => handleRatingChange("rating1", value)}
            />
          </div>
        </div>

        {/* Bottom Left Rating */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F9FAFB] p-4 rounded-lg">
            <div className="text-lg text-gray-600 mb-2">
              Facilities Rating 5
            </div>
            <StarRating
              rating={ratings.rating5_2}
              onChange={(value) => handleRatingChange("rating5_2", value)}
            />
          </div>

          <div className="text-lg text-gray-600">
            In this section you will be asked to rate different parts of the ATO.
            Please only rate the areas relevant to the training you completed.
            Use the following scale:
          </div>
        </div>
      </div>

      {/* Rating Scale Legend */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="text-center p-4 bg-red-100 rounded-lg">
          <FaStar className="text-2xl text-red-500 mb-2 mx-auto" />
          <div className="text-lg font-medium text-red-600">Unsatisfactory</div>
        </div>
        <div className="text-center p-4 bg-orange-100 rounded-lg">
          <div className="text-2xl text-orange-500 mb-2 flex items-center justify-center gap-2">
            <FaStar />
            <FaStar />
          </div>
          <div className="text-lg font-medium text-orange-600">Satisfactory</div>
        </div>
        <div className="text-center p-4 bg-yellow-100 rounded-lg relative">
          <div className="text-2xl text-yellow-500 mb-2 flex items-center justify-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-lg font-medium text-yellow-600">Good</div>
        </div>
        <div className="text-center p-4 bg-green-100 rounded-lg">
          <div className="text-2xl text-green-500 mb-2 flex items-center justify-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-lg font-medium text-green-600">Very Good</div>
        </div>
        <div className="text-center p-4 bg-blue-100 rounded-lg">
          <div className="text-2xl text-blue-500 mb-2 flex items-center justify-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-lg font-medium text-blue-600">Perfect</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
