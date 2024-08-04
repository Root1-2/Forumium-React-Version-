import { useQuery } from "@tanstack/react-query";
import { getPosts as getPostsApi } from "./apiPosts";

export function usePosts(id = null) {
  const { isPending, data: posts } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostsApi({ id }),
  });

  return { isPending, posts };
}
