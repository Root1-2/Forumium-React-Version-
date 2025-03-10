import React, { useState, useEffect, useRef, forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

const Dropdown = forwardRef(
  ({ children, label, error, name, setValue, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(label);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleItemClick = (itemLabel) => {
      setSelectedLabel(itemLabel);
      setIsOpen(false);
      if (setValue) {
        setValue(name, itemLabel, { shouldValidate: true });
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div
        className="relative inline-block w-full text-left"
        ref={ref || dropdownRef}
      >
        <button
          type="button"
          className="inline-flex w-full justify-between rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-600 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedLabel}
          <span
            className={`ml-2 h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-sm text-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onClick: () => handleItemClick(child.props.children),
                className:
                  "block cursor-pointer select-none py-2 px-4 hover:bg-gray-600 hover:text-white",
              }),
            )}
          </ul>
        )}
        {error?.message && (
          <p className="text-sm text-red-500">{error.message}</p>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.any,
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Dropdown;
