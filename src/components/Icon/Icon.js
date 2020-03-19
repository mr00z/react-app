import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, size, classNames, onClick }) => (
  <span className={`icon ${sizeMapping[size]} ${classNames}`} onClick={onClick}>
    <i className={`la la-${name} la-${size}`} />
  </span>
);

const sizeMapping = {
  xs: 'is-small',
  sm: 'is-small',
  lg: 'is-medium',
  '2x': 'is-large',
  '3x': 'is-large'
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};

export default Icon;
