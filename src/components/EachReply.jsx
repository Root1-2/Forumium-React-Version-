import { useState } from "react";
import { useUser } from "../services/useUser";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useDeleteReply } from "../services/useDeleteReply";
import { timeModified } from "../helper/timeModified";

import PropTypes from "prop-types";
import ReplyForm from "./ReplyForm";
import ConfirmDelete from "../ui/ConfirmDelete";

export default function EachReply({ reply }) {
  let { id } = useParams();
  id = +id;
  const { user } = useUser();
  const { username } = user.user_metadata;
  const [isReplyFormVisible, setReplyFormVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const replyDelete = useDeleteReply();

  function handleEdit() {
    setReplyFormVisible(!isReplyFormVisible);
  }

  function handleDelete() {
    setDeleteModalVisible(true);
  }

  function handleConfirmDelete() {
    replyDelete(reply.id);
    setDeleteModalVisible(false);
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
          <span className="ms-5 text-sm">{timeModified(reply.created_at)}</span>
        </div>
      </div>
      <div className="rounded-b-lg bg-gray-500 px-6 py-3">
        <p className="whitespace-pre break-words">{reply.replyContent}</p>
        {username === reply.replier && (
          <div className="mt-5 flex justify-end gap-5">
            <FiEdit2 cursor={"pointer"} onClick={handleEdit} />
            <FaRegTrashCan cursor={"pointer"} onClick={handleDelete} />
          </div>
        )}
      </div>
      <ReplyForm
        replyid={reply.id}
        postId={id}
        isVisible={isReplyFormVisible}
        replyContent={reply.replyContent}
        onSuccess={handleEdit}
        isEdit={true}
      />
      {isDeleteModalVisible && (
        <ConfirmDelete
          typeName="reply"
          onConfirm={handleConfirmDelete}
          onCloseModal={() => setDeleteModalVisible(false)}
        />
      )}
    </div>
  );
}

EachReply.propTypes = {
  reply: PropTypes.object.isRequired,
};
