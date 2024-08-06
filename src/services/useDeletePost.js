import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "./apiPosts";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeletePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success("Post Deleted Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      navigate("/post");
    },
  });

  return { deletePost, isPending };
}
