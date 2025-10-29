import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  showLoadingToast,
  updateToastError,
  updateToastSuccess,
} from "@/lib/utils";

const CommentsSection = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editSubject, setEditSubject] = useState("");

  // Fetch comments
  const { data, isLoading, isError } = useQuery({
    queryKey: ["article-comments", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/comments/article/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
// console.log(data)
  const comments = data?.data || [];

  // Delete
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axiosSecure.delete(`/comment/${id}`);
    },
    onSuccess: () => {
      toast.success("Comment deleted successfully");
      queryClient.invalidateQueries(["article-comments", id]);
    },
    onError: () => {
      toast.error("Failed to delete comment");
    },
  });

  // Edit
  const editMutation = useMutation({
    mutationFn: async ({ commentId, newText, newSubject }) => {
      const res = await axiosSecure.post(`/comment/${commentId}`, { 
        comment: newText,
        subject: newSubject
      });
      return res.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Updating comment...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      queryClient.invalidateQueries(["article-comments", id]);
      setEditingId(null);
      setEditText("");
      setEditSubject("");
      updateToastSuccess(
        context.toastId,
        response?.message || "Comment updated successfully"
      );
    },
    onError: (error, _variables, context) => {
      console.error("Error updating comment:", error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong, try again later!!";

      updateToastError(context.toastId, errorMessage);
    },
  });

  if (isLoading)
    return <p className="p-4 text-gray-500">Loading comments...</p>;
  if (isError)
    return <p className="p-4 text-red-500">Failed to load comments.</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Comments ({comments.length})
      </h2>

      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm">No comments yet.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="flex gap-3 p-3 border border-gray-200 rounded-xl hover:shadow-sm transition"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img src={c.user_avatar} alt={c.user_name} className="w-10 h-10 rounded-full" />
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                {editingId === c.id ? (
                  <>
                    <div className="mb-2">
                      <input
                        type="text"
                        value={editSubject}
                        onChange={(e) => setEditSubject(e.target.value)}
                        className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 font-medium"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="Comment"
                      />
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() =>
                          editMutation.mutate({
                            commentId: c.id,
                            newText: editText,
                            newSubject: editSubject,
                          })
                        }
                        className="px-3 py-1 text-xs text-white bg-green-500 rounded-md hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditingId(null);
                          setEditText("");
                          setEditSubject("");
                        }}
                        className="px-3 py-1 text-xs text-gray-600 border rounded-md hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">{c.subject}</h4>
                      <span className="text-xs text-gray-500 font-bold">
                        {c.user_name}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mt-1">{c.comment}</p>
                    
                    {/* Show Edit/Delete only if user is the owner */}
                    {user?.id === c.user_id && (
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => {
                            setEditingId(c.id);
                            setEditText(c.comment);
                            setEditSubject(c.subject);
                          }}
                          className="px-3 py-1 text-xs text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            // console.log(`Deleting comment with ID: ${c.id}`);
                            deleteMutation.mutate(c.id);
                          }}
                          className="px-3 py-1 text-xs text-white bg-red-500 rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;