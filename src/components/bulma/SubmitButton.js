import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ onClick }) => (
  <button type='submit' className='button text-center' onClick={onClick}>
    Submit
  </button>
);

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func
};
