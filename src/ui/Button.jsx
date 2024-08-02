import PropTypes from "prop-types";

const colorClasses = {
  blue: "from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800",
  green:
    "from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
  cyan: "from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
  teal: "from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
  lime: "from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800 text-gray-900",
  red: "from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
  pink: "from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
  purple:
    "from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
  alternate:
    "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-900 border border-gray-300 hover:bg-gradient-to-br focus:ring-gray-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
  dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 text-white border border-gray-700 hover:bg-gradient-to-br focus:ring-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
  light:
    "bg-gradient-to-r from-white via-gray-100 to-gray-200 text-gray-900 border border-gray-300 hover:bg-gradient-to-br focus:ring-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
};

function Button({ color, children, type, disabled }) {
  const buttonClasses = colorClasses[color] || colorClasses.blue;

  return (
    <button
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
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
