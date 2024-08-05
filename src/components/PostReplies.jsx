import Spinner from "../ui/Spinner";
import EachReply from "./EachReply";
import PropTypes from "prop-types";

export default function PostReplies({ isPending, replies }) {
  if (isPending) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!replies || replies.length === 0) {
    return null;
  }

  return (
    <div className="w-full rounded-lg border border-none bg-gray-700">
      {replies.map((reply) => (
        <EachReply reply={reply} key={reply.id} />
      ))}
    </div>
  );
}

PostReplies.propTypes = {
  isPending: PropTypes.bool,
  replies: PropTypes.object,
};
