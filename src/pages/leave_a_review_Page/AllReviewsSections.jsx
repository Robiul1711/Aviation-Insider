import ResultsForm from "@/components/leave_a_review_Components/ResultsForm";
import ReviewAccodion from "@/components/leave_a_review_Components/ReviewAccodion";
import ReviewForm from "@/components/leave_a_review_Components/ReviewForm";
import ReviewFormFinal from "@/components/leave_a_review_Components/ReviewFormFinal";
import ReviewSubmitForm from "@/components/leave_a_review_Components/ReviewSubmitForm";
import { useAuth } from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  showLoadingToast,
  updateToastError,
  updateToastSuccess,
} from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const AllReviewsSections = () => {
  const { user } = useAuth();
  const methods = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const ReviewMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post("/reviews", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Sending review...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Review sent successfully"
      );
      navigate(`/review-view/${response.data.id}`);
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";
      updateToastError(context.toastId, errorMessage);
    },
  });

  const onSubmit = (data) => {
    if (!user) {
      // 🚫 If no user, show error notification
      updateToastError(null, "You must be logged in to submit a review");
      return;
    }

    const payload = {
      ...data,
      flight_school_id: id, // backend expects this
    };

    console.log("Final form data:", payload);
    ReviewMutation.mutate(payload);
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
