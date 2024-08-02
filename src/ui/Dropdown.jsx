import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({ children, label }) => {
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
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex w-full justify-between rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-600 focus:outline-none"
        onClick={toggleDropdown}
      >
        {selectedLabel}
        {isOpen ? (
          <FaChevronUp className="ml-2 h-5 w-5" />
        ) : (
          <FaChevronDown className="ml-2 h-5 w-5" />
        )}
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
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
