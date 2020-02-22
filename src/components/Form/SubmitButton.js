import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ onClick, isLoading }) => (
  <button
    type="submit"
    className={`button text-center ${isLoading ? "is-loading" : ""}`}
    onClick={onClick}
  >
    Submit
  </button>
);

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool
};
