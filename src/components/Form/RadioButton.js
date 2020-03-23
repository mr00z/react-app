import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ name, label, value, onChange, defaultChecked }) => {
  return (
    <>
      <label className="radio">
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          defaultChecked={defaultChecked}
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
  value: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool
};
