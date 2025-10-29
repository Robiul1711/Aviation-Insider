import useAxiosPublic from "@/hooks/useAxiosPublic";
import { showLoadingToast, updateToastError, updateToastSuccess } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { MdEmail } from "react-icons/md";

const ContaactForm = () => {
    const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const ContactMutation=useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/contact", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Sending message...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
       updateToastSuccess(
              context.toastId,
              response?.message || "Message sent successful"
            );
            reset();
    },
    onError: (error, _variables, context) => {
      // console.log(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong, try again later!!";
    updateToastError(context.toastId, errorMessage);
    },
  })
  
  const onSubmit = data => {
    // console.log(data);
    ContactMutation.mutate(data);
  };
const {data:contactInfo,isLoading,error}=useQuery({
    queryKey:["contact-info"],
    queryFn:async()=>{
        const response=await axiosPublic.get("/cms/contact_page/get_in_touch_section");
        return response?.data;
    }
})

  return (
    <div className="py-12 bg-white flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto section-padding-x">
      {/* Left: Contact Info */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">{contactInfo?.data?.get_in_touch_section?.title||""}</h2>
        <p className=" text-gray-700 max-w-sm" dangerouslySetInnerHTML={{__html:contactInfo?.data?.get_in_touch_section?.description||""}}></p>
         
        
        <div className="flex items-center gap-3 mt-4">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            <MdEmail size={20} />
          </div>
          <span className="text-gray-800 font-medium text-base">
           {contactInfo?.data?.get_in_touch_section?.email||""}
          </span>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 text-base">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name."
              className="w-full px-4 py-2 border rounded-md text-base bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-base">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-gray-700 text-base">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter your email."
              className="w-full px-4 py-2 border rounded-md text-base bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-base">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-gray-700 text-base">Subject</label>
            <input
              {...register("subject", { required: "Subject is required" })}
              placeholder="Enter your subject."
              className="w-full px-4 py-2 border rounded-md text-base bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject && <p className="text-red-500 text-base">{errors.subject.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-gray-700 text-base">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="4"
              placeholder="Enter your message."
              className="w-full px-4 py-2 border rounded-md text-base bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-500 text-base">{errors.message.message}</p>}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("terms", { required: "You must agree before submitting." })}
            />
            <span className="text-base text-gray-600">
              I agree to the terms of service and privacy policy
            </span>
          </div>
          {/* {errors.terms && <p className="text-red-500 text-base">{errors.terms.message}</p>} */}

          <button
            type="submit"
            className="w-full bg-Secondary-light text-white py-2 rounded-md text-base hover:bg-blue-700 transition"
          >
             {ContactMutation?.isPending ? (
              <BeatLoader
                loading={ContactMutation?.isPending}
                color="white"
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContaactForm;
