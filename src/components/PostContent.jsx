import { useParams } from "react-router-dom";
import { usePosts } from "../services/usePosts";

function PostContent() {
  let { id } = useParams();

  const { isPending, posts } = usePosts(id);
  console.log(posts);

  return (
    <div className="w-full rounded-lg border border-none bg-gray-700">
      {/* Post Header */}
      <div className="flex justify-between px-6 py-3">
        <p className="font-semibold">Post Name</p>
        <div>
          <span className="rounded-full bg-cyan-800 p-2 text-sm">
            Post Category
          </span>
          <span className="ms-5 text-sm">Posted on</span>
        </div>
      </div>
      {/* Post Body */}
      <div className="rounded-b-lg bg-gray-500 px-6 py-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="mt-5 flex justify-end">Icons</div>
      </div>
    </div>
  );
}

export default PostContent;
