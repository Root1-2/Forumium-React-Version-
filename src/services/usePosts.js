import { useQuery } from "@tanstack/react-query";
import { getPosts as getPostsApi } from "./apiPosts";
import { useEffect } from "react";
import supabase from "./supabase";

export function usePosts(id) {
  const {
    isPending,
    data: posts,
    refetch,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostsApi({ id }),
  });

  useEffect(() => {
    const channel = supabase
      .channel("posts")
      .on(
        "postgres_changes",
        {
          event: "*",
          table: "posts",
          filter: id ? `id=eq.${id}` : undefined,
        },
        () => refetch(),
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [id, refetch]);

  return { isPending, posts };
}
