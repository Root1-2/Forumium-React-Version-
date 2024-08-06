import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditReply as createEditReplyApi } from "./apiReply";
import toast from "react-hot-toast";

export function useCreateReply() {
  const queryClient = useQueryClient();
  const { mutate: createReply, isPending } = useMutation({
    mutationFn: createEditReplyApi,
    onSuccess: () => {
      toast.success("Replied Successfully");
      queryClient.invalidateQueries({ queryKey: ["reply"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createReply, isPending };
}
