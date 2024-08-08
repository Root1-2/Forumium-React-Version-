import { timeModified } from "../helper/timeModified";
import { useUser } from "../services/useUser";
import { useDeletePost } from "../services/useDeletePost";
import { useState } from "react";
import PropTypes from "prop-types";

import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import ConfirmDelete from "../ui/ConfirmDelete";
import Spinner from "../ui/Spinner";
import ReplyForm from "./ReplyForm";

export default function PostContent({ isPending, posts }) {
  const { user } = useUser();
  const { username } = user.user_metadata;
  const [isReplyFormVisible, setReplyFormVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const { deletePost, isPending: isDeleting } = useDeletePost();

  if (isPending) return <Spinner />;

  const { created_at, postName, postSection, postContent, postCreator, id } =
    posts[0];

  function handleEdit() {
    setReplyFormVisible(!isReplyFormVisible);
  }

  function handleDelete() {
    setDeleteModalVisible(true);
  }

  function handleConfirmDelete() {
    deletePost(id);
    setDeleteModalVisible(false);
  }

  return (
    <div className="w-full rounded-lg bg-gray-700">
      {/* Post Header */}
      <div className="flex justify-between rounded-lg border-b border-gray-600 px-6 py-3">
        <p className="font-semibold">
          <span className="text-lg font-semibold text-sky-100">
            {postCreator} :{" "}
          </span>
          {postName}
        </p>
        <div className="flex items-center">
          <span className="rounded-full bg-cyan-800 px-3 py-1 text-sm text-white">
            {postSection}
          </span>
          <span className="ml-5 text-sm text-gray-400">
            {timeModified(created_at)}
          </span>
        </div>
      </div>
      {/* Post Body */}
      <div className="px-6 py-3">
        <p className="whitespace-pre-wrap break-words">{postContent}</p>
        {username === postCreator && (
          <div className="mt-5 flex justify-end gap-5 text-white">
            <FiEdit2 cursor="pointer" onClick={handleEdit} />
            <FaRegTrashCan cursor="pointer" onClick={handleDelete} />
          </div>
        )}
      </div>
      <ReplyForm
        postId={id}
        isVisible={isReplyFormVisible}
        replyContent={postContent}
        onSuccess={handleEdit}
        isEdit={true}
        postName={postName}
        postSection={postSection}
      />
      {isDeleteModalVisible && (
        <ConfirmDelete
          isPending={isDeleting}
          typeName="reply"
          onConfirm={handleConfirmDelete}
          onCloseModal={() => setDeleteModalVisible(false)}
        />
      )}
    </div>
  );
}

PostContent.propTypes = {
  isPending: PropTypes.bool,
  posts: PropTypes.array.isRequired,
};
