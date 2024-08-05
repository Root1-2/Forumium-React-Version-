import { usePosts } from "../services/usePosts";
import Spinner from "../ui/Spinner";
import ForumTableRow from "./ForumTableRow";

function ForumTableBody() {
  const { isPending, posts } = usePosts();

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
