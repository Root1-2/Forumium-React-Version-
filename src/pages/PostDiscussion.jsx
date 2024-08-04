import PostContent from "../components/PostContent";
import PostReplies from "../components/PostReplies";

function PostDiscussion() {
  return (
    <div className="flex justify-center">
      <PostContent />
      <PostReplies />
    </div>
  );
}

export default PostDiscussion;
