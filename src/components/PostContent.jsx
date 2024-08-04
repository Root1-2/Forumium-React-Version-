import { useParams } from "react-router-dom";
import { usePosts } from "../services/usePosts";
import Spinner from "../ui/Spinner";
import { timeModified } from "../helper/timeModified";

function PostContent() {
  let { id } = useParams();

  const { isPending, posts } = usePosts(id);

  // Show spinner while loading
  if (isPending) return <Spinner />;

  // Destructure the first (and only) post from the posts array
  const post = posts[0];
  const { created_at, postName, postSection, postContent, postCreator } = post;

  return (
    <div className="w-full rounded-lg border border-none bg-gray-700">
      {/* Post Header */}
      <div className="flex justify-between px-6 py-3">
        <p className="font-semibold">
          <span className="text-lg font-semibold text-sky-100">
            {postCreator} :{" "}
          </span>
          {postName}
        </p>
        <div>
          <span className="rounded-full bg-cyan-800 p-2 text-sm">
            {postSection}
          </span>
          <span className="ms-5 text-sm">{timeModified(created_at)}</span>
        </div>
      </div>
      {/* Post Body */}
      <div className="rounded-b-lg bg-gray-500 px-6 py-3">
        <p>{postContent}</p>
        <div className="mt-5 flex justify-end">Icons</div>
      </div>
    </div>
  );
}

export default PostContent;
