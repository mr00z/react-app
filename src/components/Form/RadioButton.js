import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ name, label, value, onChange, defaultChecked }) => {
  const id = `${name}-${label}`;
  return (
    <>
      <input
        id={id}
        className="is-checkradio"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
