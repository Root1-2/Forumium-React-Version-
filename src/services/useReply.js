import { useQuery } from "@tanstack/react-query";
import { getReply as getReplyApi } from "../services/apiReply";

export function useReply(postId) {
  const { data, error, isPending } = useQuery({
    queryKey: ["replies", postId],
    queryFn: () => getReplyApi({ postId }),
  });

  if (error) {
    console.error("Error fetching replies with react-query:", error);
  }

  const replies = data ? data.replies : [];

  return { isPending, replies };
}
