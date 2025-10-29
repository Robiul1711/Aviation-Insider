import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CommonButton from "@/components/common/CommonButton";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
  showLoadingToast,
  updateToastSuccess,
  updateToastError,
} from "@/lib/utils";
import { BeatLoader } from "react-spinners";
import { useAuth } from "@/hooks/useAuth";
export default function SignIn() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const LoginMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/login", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Logging in...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Login successful"
      );

      const token = response?.token;
      const userData = response?.userData;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData, token);
      navigate("/");
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";

      updateToastError(context.toastId, errorMessage);
    },
  });
  const onSubmit = (data) => {
    // console.log("Form Submitted:", data);
    LoginMutation.mutate(data);
    // 🔐 Handle login logic here
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-xl  p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Sign In to Your Account
          </h1>
          <p className="text-gray-600 text-sm">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
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
                placeholder="yourname@gmail.com"
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

          {/* Password Field */}
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
                    message: "Password must be at least 6 characters",
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-end text-sm">
    
            <Link
              to={"/auth/forget-password"}
              type="button"
              className="text-blue-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <CommonButton
            type="submit"
            variant="secondary"
            className="w-full h-[44px] flex items-center justify-center"
          >
            {LoginMutation?.isPending ? (
              <BeatLoader
                loading={LoginMutation?.isPending}
                color="white"
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Sign In"
            )}
          </CommonButton>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to={"/auth/sign-up"}
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
