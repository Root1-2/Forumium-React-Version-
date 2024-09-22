import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ForumTable from "../components/ForumTable";
import ButtonIcon from "../ui/ButtonIcon";

function Post() {
  return (
    <>
      <div className="h-screen overflow-y-auto">
        <h1 className="my-5 text-center text-2xl font-semibold text-white">
          Discover Topics of your likings
        </h1>
        <div className="flex justify-center">
          <ForumTable />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 h-20 w-20">
        <NavLink to="/post/new">
          <ButtonIcon>
            <FaPlus color="white" size={20} />
          </ButtonIcon>
        </NavLink>
      </div>
    </>
  );
}

export default Post;
