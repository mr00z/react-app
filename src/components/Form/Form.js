import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => (
  <form className="has-text-grey-lighter" onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
