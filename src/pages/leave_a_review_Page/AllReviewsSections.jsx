import ResultsForm from "@/components/leave_a_review_Components/ResultsForm";
import ReviewAccodion from "@/components/leave_a_review_Components/ReviewAccodion";
import ReviewForm from "@/components/leave_a_review_Components/ReviewForm";
import ReviewFormFinal from "@/components/leave_a_review_Components/ReviewFormFinal";
import ReviewSubmitForm from "@/components/leave_a_review_Components/ReviewSubmitForm";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AllReviewsSections = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Final form data:", data);
    navigate("/review-view"); // redirect after submit
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ReviewForm />
        <ReviewAccodion />
        <ResultsForm />
        <ReviewSubmitForm />
        <ReviewFormFinal />

        {/* Submit Button */}
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-Secondary hover:bg-blue-700 text-white font-medium py-2 px-10 rounded-sm transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AllReviewsSections;
