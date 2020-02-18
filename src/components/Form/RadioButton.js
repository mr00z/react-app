import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ name, label, value, checked, onChange }) => {
  return (
    <>
      <label className="radio">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};
