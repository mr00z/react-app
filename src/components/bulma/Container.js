import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, ...otherProps }) => (
  <div className="container" {...otherProps}>
    {children}
  </div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
