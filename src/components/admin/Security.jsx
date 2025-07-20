import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Info } from "lucide-react";

const Security = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    repeat: false,
  });

  const onSubmit = (data) => {
    console.log("Form Data", data);
    // handle password update here
  };

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="max-w-4xl  p-6 rounded-md shadow-sm">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-base font-semibold text-gray-800">
          Change Password
        </h2>
        <Info size={16} className="text-gray-400" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Old Password */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Old Password
          </label>
          <div className="relative">
            <input
              type={showPassword.old ? "text" : "password"}
              {...register("oldPassword", { required: "Old password is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => toggleVisibility("old")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.oldPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.oldPassword.message}</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type={showPassword.new ? "text" : "password"}
              {...register("newPassword", { required: "New password is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => toggleVisibility("new")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Repeat New Password */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Repeat New Password
          </label>
          <div className="relative">
            <input
              type={showPassword.repeat ? "text" : "password"}
              {...register("repeatPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("newPassword") || "Passwords do not match",
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => toggleVisibility("repeat")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword.repeat ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.repeatPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.repeatPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-Secondary-light text-white px-6 py-2 rounded-lg hover:bg-Secondary text-sm font-medium transition-colors duration-200"
          >
            Save & Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;
