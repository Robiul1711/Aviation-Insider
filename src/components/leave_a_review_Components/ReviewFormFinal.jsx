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
    }
    setValue("securityContact", false);
  }, [data, user, setValue]);

  return (
    <div className="border rounded-md mt-10 p-6">
      <div className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 mb-2">Enter Your Name</label>
          <input
          defaultValue={user?.name || ""}
            disabled
            type="text"
            {...register("name")}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 mb-2">Enter Your Email</label>
          <input
          defaultValue={user?.email || ""}
            disabled
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Security Contact Checkbox */}
        <div>
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("securityContact")}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">
              For security, we need your details in case we need to contact you
              regarding your review
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
