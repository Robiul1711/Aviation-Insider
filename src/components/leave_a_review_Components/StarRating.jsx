import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useFormContext } from "react-hook-form";

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

export default StarRating;
