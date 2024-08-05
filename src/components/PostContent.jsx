import { timeModified } from "../helper/timeModified";
import PropTypes from "prop-types";

import Spinner from "../ui/Spinner";

export default function PostContent({ isPending, posts }) {
  if (isPending) return <Spinner />;

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
        <p className="break-words">{postContent}</p>
        <div className="mt-5 flex justify-end">Icons</div>
      </div>
    </div>
  );
}

PostContent.propTypes = {
  isPending: PropTypes.bool,
  posts: PropTypes.object,
};
