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
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditReview = () => {
  const { user } = useAuth();
  const methods = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();


  const { data, isLoading, error } = useQuery({
    queryKey: ['user-reviews', id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/user/reviews/${id}`);
      return response.data;
    }
  });

// console.log(data);
  const EditReviewMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post(`/reviews/${id}`, data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Updating review...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Review edited successfully"
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
const onSubmit = (formData) => {
  // Exclude fields that are not in your database
  const { securityContact, ...rest } = formData;

  const payload = {
    ...rest,
    flight_school_id: data?.data?.flight_school_id,
  };

  // console.log("Final form data:", payload);
  EditReviewMutation.mutate(payload);
};


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="section-padding-x section-padding-y">
        <ReviewForm  data={data}/>
        <ReviewAccodion data={data} />
        <ResultsForm data={data} />
        <ReviewSubmitForm data={data} />
        <ReviewFormFinal data={data} />

        {/* Submit Button */}
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-Secondary hover:bg-blue-700 text-white font-medium py-2 px-10 rounded-sm transition duration-200"
          >
            Update
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditReview;

