import PropTypes from "prop-types";

const colorClasses = {
  blue: "from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-800",
  green:
    "from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-800",
  cyan: "from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-800",
  teal: "from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-800",
  lime: "from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-800 text-gray-900",
  red: "from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-800",
  pink: "from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-800",
  purple:
    "from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-800",
  alternate:
    "bg-gradient-to-r border hover:bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white border-gray-600 focus:ring-gray-700",
  dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 text-white border border-gray-700 hover:bg-gradient-to-br focus:ring-gray-300",
  light:
    "bg-gradient-to-r border hover:bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white border-gray-600 focus:ring-gray-700",
};

function Button({ color, children, type, disabled, onClick }) {
  const buttonClasses = colorClasses[color] || colorClasses.blue;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-lg bg-gradient-to-r px-5 py-2.5 text-center text-sm font-medium ${buttonClasses} mb-2 me-2`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorClasses)),
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
