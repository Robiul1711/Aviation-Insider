import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CommonButton from "@/components/common/CommonButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import {
  showLoadingToast,
  updateToastSuccess,
  updateToastError,
} from "@/lib/utils";
import { BeatLoader } from "react-spinners";
import { useEmail } from "@/hooks/useEmail";
export default function SignUp() {
  const { setEmail } = useEmail();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const SignupMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/register", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Registering...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(context.toastId, response?.message || "Sign-up successful");

      navigate("/auth/verify-code");
    },
    onError: (error, _variables, context) => {
      console.log(error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";
      updateToastError(context.toastId, errorMessage);
    },
  });

  const onSubmit = (data) => {
    setEmail(data?.email);
    SignupMutation.mutate(data);
    // 🔐 Handle signup logic here
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-lg bg-white rounded-xl p-4 sm:p-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Create an Account
          </h1>
          <p className="text-gray-600 text-sm">
            Let’s get started on your aviation journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-6"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="fullName"
                type="text"
                {...register("name", { required: "Full name is required" })}
                placeholder="John Doe"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:ring-2 focus:outline-none transition ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="you@example.com"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:ring-2 focus:outline-none transition ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                placeholder="••••••••"
                className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:ring-2 focus:outline-none transition ${
                  errors.password
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                {...register("password_confirmation", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="••••••••"
                className={`w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:ring-2 focus:outline-none transition ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <CommonButton
            type="submit"
            variant="secondary"
            className="w-full h-[44px] flex items-center justify-center "
          >
            {SignupMutation?.isPending ? (
              <BeatLoader
                loading={SignupMutation?.isPending}
                color="white"
                size={12}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Sign Up"
            )}
          </CommonButton>
        </form>

        {/* Already have account? */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/auth/sign-in"}
            className="text-blue-600 hover:underline font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
