import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonButton from "@/components/common/CommonButton";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
  showLoadingToast,
  updateToastError,
  updateToastSuccess,
} from "@/lib/utils";
import { BeatLoader } from "react-spinners";
import { useEmail } from "@/hooks/useEmail";

const ResetPassword = () => {
  const { resetToken } = useEmail(); // Assuming token comes from context
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const ResetPassMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/reset-password", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Resetting password...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Password reset successful"
      );
      navigate("/auth/sign-in");
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";
      updateToastError(context.toastId, errorMessage);
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    console.log("Reset token is:", resetToken);
    ResetPassMutation.mutate({ ...data, reset_token: resetToken });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-3">
          Reset Your Password
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create a strong password you’ll remember.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* New Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("new_password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition ${
                  errors.new_password
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.new_password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.new_password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                {...register("new_password_confirmation", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("new_password") ||
                    "Passwords do not match",
                })}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition ${
                  errors.new_password_confirmation
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.new_password_confirmation && (
              <p className="mt-1 text-sm text-red-500">
                {errors.new_password_confirmation.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <CommonButton
            type="submit"
            variant="secondary"
            className="w-full h-[44px] flex items-center justify-center"
          >
            {ResetPassMutation?.isPending ? (
              <BeatLoader
                loading={ResetPassMutation?.isPending}
                color="white"
                size={10}
              />
            ) : (
              "Reset Password"
            )}
          </CommonButton>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
