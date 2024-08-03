import { useQuery } from "@tanstack/react-query";
import { getPosts as getPostsApi } from "../services/apiPosts";

import Spinner from "../ui/Spinner";
import ForumTableRow from "./ForumTableRow";

function ForumTableBody() {
  const {
    isPending,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
  });

  if (isPending)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <tbody>
      {posts.map((post) => (
        <ForumTableRow post={post} key={post.id} />
      ))}
    </tbody>
  );
}

export default ForumTableBody;
