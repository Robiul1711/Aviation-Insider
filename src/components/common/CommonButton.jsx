import React from "react";
import { cn } from "@/lib/utils";

// Define style variants
const variants = {
  primary: "px-7 py-3 border rounded-full text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const CommonButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2",
        variants[variant] || variants.primary,
        (disabled || isLoading) && "opacity-60 cursor-not-allowed",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-inherit"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default CommonButton;
