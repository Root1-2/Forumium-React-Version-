import PropTypes from "prop-types";
import Button from "../ui/Button";

export default function ConfirmDelete({ onConfirm, disabled, onCloseModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-gray-700 p-6 shadow-lg">
        <h1 className="my-4 text-2xl font-semibold">Delete Reply</h1>
        <p className="mb-4 text-gray-300">
          Are you sure you want to delete this reply permanently? This action
          cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Button color="alternate" disabled={disabled} onClick={onCloseModal}>
            Cancel
          </Button>
          <Button color="dark" disabled={disabled} onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
};
