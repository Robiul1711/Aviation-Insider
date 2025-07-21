import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Define style variants
const variants = {
primary: "px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 border rounded-full text-white text-sm sm:text-base",
secondary: "bg-Secondary-light hover:bg-Secondary/80 text-white border rounded-md px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-7 md:py-3 md:text-base",
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
    <Link to={props.to || "#"}
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
    </Link>
  );
};

export default CommonButton;
