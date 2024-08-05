import { useParams } from "react-router-dom";
import { useReply } from "../services/useReply";
import Spinner from "../ui/Spinner";

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
    return <div>No replies found.</div>;
  }

  return (
    <div className="w-full rounded-lg border border-none bg-gray-700">
      {replies.map((reply) => (
        <div key={reply.id} className="mb-4">
          <div className="flex justify-between px-6 py-3">
            <p className="font-semibold">
              <span className="text-lg font-semibold text-sky-100">
                Replied By:
              </span>
              {reply.replier}
            </p>
            <div>
              <span className="ms-5 text-sm">
                {new Date(reply.created_at).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="rounded-b-lg bg-gray-500 px-6 py-3">
            <p className="break-words">{reply.replyContent}</p>
            <div className="mt-5 flex justify-end">Icons</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostReplies;
