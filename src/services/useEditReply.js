import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditReply as createEditReplyApi } from "./apiReply";
import toast from "react-hot-toast";

export function useEditReply() {
  const queryClient = useQueryClient();

  const { mutate: editReply, isLoading: isEditPending } = useMutation({
    mutationFn: ({ replyData, id }) => createEditReplyApi(replyData, id),
    onSuccess: () => {
      toast.success("Reply Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: ["reply"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editReply, isEditPending };
}
