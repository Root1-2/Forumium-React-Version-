import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditPost as createEditPostApi } from "./apiPosts";
import toast from "react-hot-toast";

export function useEditPost() {
  const queryClient = useQueryClient();

  const { mutate: editPost, isPending } = useMutation({
    mutationFn: ({ postData, id }) => createEditPostApi(postData, id),
    onSuccess: () => {
      toast.success("Post Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editPost, isPending };
}
