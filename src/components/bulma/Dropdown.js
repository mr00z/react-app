import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, onChange }) => (
  <div className="is-flex dropdown">
    <div className="control">
      <div className="select">
        <select onChange={onChange}>
          {options.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};
