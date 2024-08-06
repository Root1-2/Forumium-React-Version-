import { useState } from "react";
import { useUser } from "../services/useUser";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
import ReplyForm from "./ReplyForm";

export default function EachReply({ reply }) {
  const { user } = useUser();
  const { username } = user.user_metadata;
  const [isReplyFormVisible, setReplyFormVisible] = useState(false);

  function handleEdit() {
    setReplyFormVisible(!isReplyFormVisible);
  }

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
        {username === reply.replier && (
          <div className="mt-5 flex justify-end gap-5">
            <FiEdit2 cursor={"pointer"} onClick={handleEdit} />
            <FaRegTrashCan cursor={"pointer"} onClick={handleEdit} />
          </div>
        )}
      </div>
      <ReplyForm
        id={reply.id}
        isVisible={isReplyFormVisible}
        replyContent={reply.replyContent}
        onSuccess={handleEdit}
        isEdit={true}
      />
    </div>
  );
}

EachReply.propTypes = {
  reply: PropTypes.object.isRequired,
};
