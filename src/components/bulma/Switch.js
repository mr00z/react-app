import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ checked, name, id, className, onChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      className={`switch is-rounded is-medium ${className}`}
      checked={checked ? 'checked' : ''}
      onChange={onChange}
    />
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Switch;
