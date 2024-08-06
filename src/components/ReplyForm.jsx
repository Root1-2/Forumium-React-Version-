import { useUser } from "../services/useUser";
import { useState, useEffect } from "react";
import { useCreateReply } from "../services/useCreateReply";
import { useEditReply } from "../services/useEditReply";
import { useEditPost } from "../services/useEditPost";

import Input from "../ui/Input";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import PropTypes from "prop-types";

export default function ReplyForm({
  isVisible,
  postId,
  replyContent,
  onSuccess,
  isEdit,
  replyid,
  postName,
  postSection,
}) {
  const { user } = useUser();
  const { username } = user.user_metadata;

  const { isPending: isCreatePending, createReply } = useCreateReply();
  const { isPending: isEditPending, editReply } = useEditReply();
  const { isPending: isEditingPost, editPost } = useEditPost();

  const [content, setContent] = useState("");

  useEffect(() => {
    if (replyContent) {
      setContent(replyContent);
    }
  }, [replyContent]);

  function handleSubmit() {
    if (postName) {
      const postData = {
        postCreator: username,
        postContent: content,
        postName: postName,
        postSection: postSection,
      };

      editPost(
        { postData, id: postId },
        {
          onSuccess: () => {
            setContent("");
            if (onSuccess) onSuccess();
          },
        },
      );
    } else {
      const replyData = {
        replier: username,
        replyContent: content,
        postId: postId,
      };

      if (isEdit) {
        editReply(
          { replyData, id: replyid },
          {
            onSuccess: () => {
              setContent("");
              if (onSuccess) onSuccess();
            },
          },
        );
      } else {
        createReply([replyData], {
          onSuccess: () => {
            setContent("");
            if (onSuccess) onSuccess();
          },
        });
      }
    }
  }

  return (
    <div
      className={`fixed bottom-0 right-0 z-30 w-full p-4 shadow-lg transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="rounded-lg bg-gray-700 p-5">
        <Input
          type="textarea"
          label={
            isEdit ? "Update your content here" : "Reply your content here"
          }
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-center gap-2">
          <Button color="dark" onClick={handleSubmit}>
            {!isCreatePending && !isEditPending && !isEditingPost ? (
              isEdit ? (
                "Update Reply"
              ) : (
                "Reply"
              )
            ) : (
              <SpinnerMini />
            )}
          </Button>
          <Button color="alternate" onClick={onSuccess}>
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  );
}

ReplyForm.propTypes = {
  isVisible: PropTypes.bool,
  postId: PropTypes.number.isRequired,
  replyid: PropTypes.number,
  replyContent: PropTypes.string,
  onSuccess: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  postName: PropTypes.string,
  postSection: PropTypes.string,
};
