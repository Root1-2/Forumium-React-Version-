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
};

function Button({ color, children, type }) {
  const gradientClasses = colorClasses[color] || colorClasses.blue;

  return (
    <button
      type={type}
      className={`bg-gradient-to-r text-white ${gradientClasses} mb-2 me-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorClasses)),
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
