import { useQuery } from "@tanstack/react-query";
import { getReply as getReplyApi } from "./apiReply";
import { useEffect } from "react";
import supabase from "./supabase";

export function useReply(id) {
  const {
    isPending,
    data: replies,
    refetch,
  } = useQuery({
    queryKey: ["reply", id],
    queryFn: () => getReplyApi(id),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const channel = supabase
      .channel("replies")
      .on(
        "postgres_changes",
        { event: "*", table: "replies", filter: `postId=eq.${id}` },
        () => refetch(),
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [id, refetch]);

  return { isPending, replies };
}
