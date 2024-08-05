import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "./apiPosts";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createPost, isPending } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success("New Post successfully created");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/post");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createPost, isPending };
}
