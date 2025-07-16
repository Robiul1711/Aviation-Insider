import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Send this to backend
  };

  return (
    <div className="py-16 bg-[#eaf2f9] flex items-center justify-center section-padding-x">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Get In Touch
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name."
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email."
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* ATO */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">ATO</label>
          <input
            type="text"
            {...register("ato", { required: "ATO is required" })}
            className="w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your ATO."
          />
          {errors.ato && (
            <p className="text-red-500 text-sm mt-1">{errors.ato.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-2 bg-gray-100 rounded-md h-24 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your message."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            {...register("terms", { required: true })}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">
            I agree to the terms of service and privacy policy
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mb-4">
            You must agree to the terms
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#2f78bd] text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
