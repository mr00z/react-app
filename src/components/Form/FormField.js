import React from "react";
import PropTypes from "prop-types";

const FormField = ({ label, children }) => (
  <div className="is-flex form__field">
    <div className="field">
      <label className="label has-text-grey-lighter">{label}</label>
      {children}
    </div>
  </div>
);

export default FormField;

FormField.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
};
