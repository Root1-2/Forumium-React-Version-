import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReply as deleteReplyApi } from "./apiReply";
import toast from "react-hot-toast";

export function useDeleteReply() {
  const queryClient = useQueryClient();

  const { mutate: replyDelete } = useMutation({
    mutationFn: deleteReplyApi,
    onSuccess: () => {
      toast.success("Reply deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["reply"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return replyDelete;
}
