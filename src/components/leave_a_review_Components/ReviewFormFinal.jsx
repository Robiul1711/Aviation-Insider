import { useAuth } from "@/hooks/useAuth";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function ReviewFormFinal({ data }) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { user } = useAuth();

  useEffect(() => {
    if (data?.data?.submitted_by) {
      setValue("name", data.data.submitted_by.name || user?.name || "");
      setValue("email", data.data.submitted_by.email || user?.email || "");
      setValue("consent", data.data.consent === 1 ? 1 : 0); // ✅ set initial value from API
    } else {
      setValue("name", user?.name || "");
      setValue("email", user?.email || "");
      setValue("consent", 0); // default unchecked
    }
  }, [data, user, setValue]);

  return (
    <div className="border rounded-md mt-10 p-6">
      <div className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 mb-2">Enter Your Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="Enter your name"
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 mb-2">Enter Your Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Security Contact Checkbox */}
        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              {...register("consent", {
                required: "You must agree before submitting",
                setValueAs: (v) => (v ? 1 : 0), // ✅ convert true/false → 1/0
              })}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />

            <span className="text-gray-700">
              Please tick to agree to our terms, which include the need for your
              contact details in case we need to contact you regarding your
              review.
            </span>
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm mt-1">
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
