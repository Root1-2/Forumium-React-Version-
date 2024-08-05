import { useQuery } from "@tanstack/react-query";
import { getReply as getReplyApi } from "./apiReply";

export function useReply(id) {
  const { isPending, data: replies } = useQuery({
    queryKey: ["reply", id],
    queryFn: () => getReplyApi(id),
  });

  return { isPending, replies };
}
