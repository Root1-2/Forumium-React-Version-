import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
  ({ label, type, id, disabled, rows = 8, error, ...rest }, ref) => {
    const baseClassName = `dark:text-dark peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-5 text-lg text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500`;

    const commonProps = {
      name: "floating",
      id,
      ref,
      disabled,
      ...rest,
      rows,
    };

    return (
      <div className="group relative z-0 mb-5 w-full">
        {type === "textarea" ? (
          <textarea
            {...commonProps}
            className={baseClassName}
            placeholder=" "
            rows={rows}
          />
        ) : (
          <input
            type={type}
            {...commonProps}
            className={baseClassName}
            placeholder=" "
          />
        )}
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500">
          {label}
        </label>
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.object,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
};

export default Input;
