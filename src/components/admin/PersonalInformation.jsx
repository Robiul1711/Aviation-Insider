import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import {
  showLoadingToast,
  updateToastError,
  updateToastSuccess,
} from "@/lib/utils";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const PersonalInformation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // ✅ Fetch profile data
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/profile`);
      return res.data;
    },
  });

  console.log(userData);
  // ✅ Preview image state
  const [preview, setPreview] = useState("");

  // ✅ Set preview image when API data arrives
  useEffect(() => {
    if (userData?.userdata?.avatar) {
      setPreview(userData.userdata.avatar);
    }
  }, [userData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Update name mutation
  const ChangeNameMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post("/profile/update", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Updating profile...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Profile updated successfully"
      );
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";
      updateToastError(context.toastId, errorMessage);
    },
  });

  const onSubmit = (data) => {
    ChangeNameMutation.mutate({ ...data, email: user?.email });
  };

  // ✅ Profile image mutation
  const ProfileMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post("/profile/update-avatar", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Updating profile photo...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Profile photo updated successfully"
      );
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";
      updateToastError(context.toastId, errorMessage);
    },
  });

 const handleUploadImage = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));

      const formData = new FormData();
-     formData.append("image", file);
+     formData.append("avatar", file);

      ProfileMutation.mutate(formData);
    }
  };

  input.click();
};


  return (
    <div className="max-w-4xl p-6 rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-lg font-medium text-gray-900">
          Personal Information
        </h1>
        <Info size={16} className="text-gray-400" />
      </div>

      {/* Photo Profile */}
      <div className="mb-8">
        <label className="block text-sm text-gray-600 mb-4">
          Photo Profile
        </label>
        <div className="flex items-center gap-4">
          <img
            src={preview || "/default-avatar.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <button
            onClick={handleUploadImage}
            type="button"
            className="bg-Secondary-light hover:bg-Secondary text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Upload Image
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
            Name
          </label>
          <input
            defaultValue={userData?.userdata?.name || user?.name}
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue={userData?.userdata?.email || user?.email}
            disabled
            className="w-full px-3 py-3 border border-gray-200 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             disabled:bg-gray-100 disabled:text-gray-500 
             disabled:cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-Secondary-light hover:bg-Secondary text-white text-sm font-medium px-6 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
