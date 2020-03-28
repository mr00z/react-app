import React from 'react';
import PropTypes from 'prop-types';

const Control = ({ children, className }) => {
  return (
    <div className={`control is-size-6-mobile is-size-5-tablet is-size-4-desktop is-size-5-widescreen ${className}`}>
      {children}
    </div>
  );
};

export default Control;

Control.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
