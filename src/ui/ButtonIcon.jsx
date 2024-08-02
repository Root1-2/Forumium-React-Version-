import PropTypes from "prop-types";

export default function ButtonIcon({ children, disabled, onClick }) {
  return (
    <button
      className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
