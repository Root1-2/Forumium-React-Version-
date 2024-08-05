import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ForumTable from "../components/ForumTable";
import ButtonIcon from "../ui/ButtonIcon";

function Post() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-semibold">
          Discover Topics of your likings
        </h1>
        <ForumTable />
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
