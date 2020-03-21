import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ onClick, isLoading, children }) => (
  <button
    type="submit"
    className={`button text-center is-link ${
      isLoading ? 'is-loading' : undefined
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node
};
