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
  id = +id;
  const [isReplyFormVisible, setReplyFormVisible] = useState(false);

  const { isPending: postLoading, posts } = usePosts(id);
  const { isPending: replyLoading, replies } = useReply(id);

  function handleReply() {
    setReplyFormVisible(!isReplyFormVisible);
  }

  return (
    <>
      <div className="mx-0 flex h-full flex-col justify-center gap-4 overflow-y-auto sm:mx-8 sm:gap-8">
        <PostContent isPending={postLoading} posts={posts} />
        <div className="max-h-[calc(100vh-20rem)] overflow-auto">
          <PostReplies isPending={replyLoading} replies={replies} />
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-40 h-20 w-20">
        <ButtonIcon onClick={handleReply}>
          <VscReply color="white" size={24} />
        </ButtonIcon>
      </div>

      <ReplyForm
        postId={id}
        isVisible={isReplyFormVisible}
        onSuccess={() => setReplyFormVisible(false)}
      />
    </>
  );
}

export default PostDiscussion;
