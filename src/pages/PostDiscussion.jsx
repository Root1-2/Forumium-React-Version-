import { useState } from "react";
import { useParams } from "react-router-dom";
import { VscReply } from "react-icons/vsc";
import { usePosts } from "../services/usePosts";
import { useReply } from "../services/useReply";
import PostContent from "../components/PostContent";
import PostReplies from "../components/PostReplies";
import ButtonIcon from "../ui/ButtonIcon";
import ReplyForm from "../components/ReplyForm";

function PostDiscussion() {
  let { id } = useParams();
  const [isReplyFormVisible, setReplyFormVisible] = useState(false);

  const { isPending: postLoading, posts } = usePosts(id);
  const { isPending: replyLoading, replies } = useReply(id);

  function handleReply() {
    setReplyFormVisible(!isReplyFormVisible);
  }

  return (
    <div className="relative overflow-y-auto">
      <div className="mx-8 flex flex-col justify-center gap-8 overflow-y-auto">
        <PostContent isPending={postLoading} posts={posts} />
        <PostReplies isPending={replyLoading} replies={replies} />
      </div>

      <div className="fixed bottom-0 right-0 z-40 h-20 w-20">
        <ButtonIcon onClick={handleReply}>
          <VscReply color="white" size={24} />
        </ButtonIcon>
      </div>

      <ReplyForm id={id} isVisible={isReplyFormVisible} />
    </div>
  );
}

export default PostDiscussion;
