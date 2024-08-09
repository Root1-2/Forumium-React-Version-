import { usePosts } from "../services/usePosts";
import Spinner from "../ui/Spinner";
import ForumTableRow from "./ForumTableRow";

function ForumTableBody() {
  const { isPending, posts } = usePosts();

  if (isPending)
    return (
      <tbody>
        <tr>
          <td colSpan="4" className="flex items-center justify-center py-4">
            <Spinner />
          </td>
        </tr>
      </tbody>
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
