import { useAuth } from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  showLoadingToast,
  updateToastError,
  updateToastSuccess,
} from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const CommentArticle = ({articleDetails}) => {
  const {id} = useParams();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const CommentMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post("/comment", data);
      return response.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Comment submitting...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Comment submitted successfully"
      );
          reset();
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";

      updateToastError(context.toastId, errorMessage);
    },
  });
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    CommentMutation.mutate({ ...data , article_id: id});

  };
  console.log(articleDetails);
  return (
    <div className="max-w-7xl mx-auto  bg-white">
      {/* Article Header */}
      <div className="mb-6">
      {articleDetails?.data?.data?.article && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {articleDetails?.data?.data?.article?.title}
          </h2>
          <p className="text-gray-700">
            {articleDetails?.data?.data?.article?.description}
          </p>
        </div>
      )}
      </div>
      {/* Comment Form */}
      {user ? (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Leave A Comment
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Comment */}
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Comment
              </label>
              <textarea
                id="comment"
                rows={6}
                {...register("comment", { required: "Comment is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              />
              {errors.comment && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.comment.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-Secondary-light hover:bg-Secondary text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
            >
              Post Comment
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-12 bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-5 rounded-lg">
          <p className="text-base font-medium">
            You must{" "}
            <a
              href="/auth/sign-in"
              className="underline text-Secondary hover:text-Secondary-dark font-semibold"
            >
              login
            </a>{" "}
            first to leave a comment.
          </p>
        </div>
      )}
    </div>
  );
};

export default CommentArticle;
