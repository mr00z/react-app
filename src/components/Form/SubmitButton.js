import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ onClick, isLoading, children, ...otherProps }) => (
  <button
    type="submit"
    className={`button text-center is-primary is-medium is-size-6-mobile ${isLoading ? 'is-loading' : ''}`}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};
