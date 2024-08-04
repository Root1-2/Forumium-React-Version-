import { useQuery } from "@tanstack/react-query";
import { getPosts as getPostsApi } from "./apiPosts";

export function usePosts() {
  const { isPending, data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
  });

  return { isPending, posts };
}
