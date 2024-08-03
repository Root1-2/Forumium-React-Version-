import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ForumTableRow({ post }) {
  const { postName, postCreator, created_at, postSection, id } = post;
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/post/${id}`);
  }
  return (
    <tr
      className="cursor-pointer border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      onClick={handleClick}
    >
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {postName}
      </th>
      <td className="px-6 py-4">{postCreator}</td>
      <td className="px-6 py-4">{created_at}</td>
      <td className="px-6 py-4">{postSection}</td>
    </tr>
  );
}

ForumTableRow.propTypes = {
  post: PropTypes.object,
};
