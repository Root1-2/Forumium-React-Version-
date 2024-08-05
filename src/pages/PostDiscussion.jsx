import { NavLink, useParams } from "react-router-dom";
import { VscReply } from "react-icons/vsc";
import { usePosts } from "../services/usePosts";
import { useReply } from "../services/useReply";
import PostContent from "../components/PostContent";
import PostReplies from "../components/PostReplies";
import ButtonIcon from "../ui/ButtonIcon";

function PostDiscussion() {
  let { id } = useParams();

  const { isPending: postLoading, posts } = usePosts(id);
  const { isPending: replyLoading, replies } = useReply(id);

  return (
    <>
      <div className="flex flex-col justify-center gap-8">
        <PostContent isPending={postLoading} posts={posts} />
        <PostReplies isPending={replyLoading} replies={replies} />
      </div>
      <div className="fixed bottom-0 right-0 h-20 w-20">
        <NavLink to="/post/new">
          <ButtonIcon>
            <VscReply color="white" size={24} />
          </ButtonIcon>
        </NavLink>
      </div>
    </>
  );
}

export default PostDiscussion;
