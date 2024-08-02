import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";
import Button from "../ui/Button";

function TopicCreateForm() {
  return (
    <div className="mx-24 rounded-lg bg-gray-800">
      <p className="bg-gray-700 py-2 text-center text-2xl">Create Post</p>
      <form className="px-20 py-10">
        <div className="mb-5 flex justify-between gap-28">
          <Input label="Post Name" />
          <div className="mt-3 w-full">
            <Dropdown label="Choose Section">
              <span>Gaming</span>
              <span>Movies</span>
              <span>TV-Series</span>
              <span>Life Topics</span>
              <span>Miscellaneous</span>
            </Dropdown>
          </div>
        </div>
        <div>
          <Input label="Post Body" type="textarea" />
        </div>

        <div className="mt-10 flex justify-end">
          <Button color="alternate">Post</Button>
        </div>
      </form>
    </div>
  );
}

export default TopicCreateForm;
