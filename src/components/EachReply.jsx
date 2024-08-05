import PropTypes from "prop-types";

export default function EachReply({ reply }) {
  return (
    <div className="mb-4">
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
  );
}

EachReply.propTypes = {
  reply: PropTypes.object,
};
