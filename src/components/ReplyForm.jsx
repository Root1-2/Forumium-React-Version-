import Input from "../ui/Input";
import Button from "../ui/Button";
import PropTypes from "prop-types";

export default function ReplyForm({ isVisible, id }) {
  function handleReplySubmit() {}
  return (
    <div
      className={`fixed bottom-0 right-0 z-30 transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } w-full p-4 shadow-lg`}
    >
      <div className="rounded-lg bg-gray-700 p-5">
        <Input type="textarea" label="Reply your content here" rows={6} />
        <div className="flex justify-center">
          <Button color="dark" onClick={handleReplySubmit}>
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
}

ReplyForm.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string,
};
