import PropTypes from "prop-types";
import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type, id, disabled, error, ...rest }, ref) => {
    return (
      <div className="group relative z-0 mb-5 w-full">
        <input
          type={type}
          name="floating"
          id={id}
          ref={ref}
          className="dark:text-dark peer block w-80 appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
          placeholder=" "
          disabled={disabled}
          {...rest}
        />
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
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  error: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Input;
