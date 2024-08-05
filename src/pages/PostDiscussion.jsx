import PostContent from "../components/PostContent";
import PostReplies from "../components/PostReplies";

function PostDiscussion() {
  return (
    <div className="flex flex-col justify-center gap-8">
      <PostContent />
      <PostReplies />
    </div>
  );
}

export default PostDiscussion;
