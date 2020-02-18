import React from "react";
import PropTypes from "prop-types";

const Control = ({ children, className }) => {
  return <div className={`control ${className}`}>{children}</div>;
};

export default Control;

Control.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
