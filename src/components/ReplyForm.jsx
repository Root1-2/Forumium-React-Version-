import { useUser } from "../services/useUser";
import { useState } from "react";
import { useCreateReply } from "../services/useCreateReply";

import Input from "../ui/Input";
import Button from "../ui/Button";
import SpinnerMini from "../ui/SpinnerMini";
import PropTypes from "prop-types";

export default function ReplyForm({ isVisible, id, onSuccess }) {
  const { user } = useUser();
  const { username } = user.user_metadata;
  const { isPending, createReply } = useCreateReply();
  const [replyContent, setReplyContent] = useState("");

  function handleReplySubmit() {
    const replyData = [
      {
        replier: username,
        replyContent: replyContent,
        postId: id,
      },
    ];

    createReply(replyData, {
      onSuccess: () => {
        setReplyContent("");
        if (onSuccess) onSuccess();
      },
    });
  }

  return (
    <div
      className={`fixed bottom-0 right-0 z-30 transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } w-full p-4 shadow-lg`}
    >
      <div className="rounded-lg bg-gray-700 p-5">
        <Input
          type="textarea"
          label="Reply your content here"
          rows={6}
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
        />
        <div className="flex justify-center">
          <Button color="dark" onClick={handleReplySubmit}>
            {!isPending ? "Reply" : <SpinnerMini />}
          </Button>
        </div>
      </div>
    </div>
  );
}

ReplyForm.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  onSuccess: PropTypes.func, // Add propTypes for onSuccess
};
