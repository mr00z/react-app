import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, ...otherProps }) => (
  <div className={`container ${className}`} {...otherProps}>
    {children}
  </div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
