import { useParams } from "react-router-dom";
import { useReply } from "../services/useReply";
import Spinner from "../ui/Spinner";
import EachReply from "./EachReply";

function PostReplies() {
  let { id } = useParams();
  const { isPending, replies } = useReply(id);

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

export default PostReplies;
