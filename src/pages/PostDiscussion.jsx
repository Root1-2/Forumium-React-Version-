import { useParams } from "react-router-dom";

function PostDiscussion() {
  let { id } = useParams();
  return <div>Page with id: {id}</div>;
}

export default PostDiscussion;
