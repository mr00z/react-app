import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FormField = ({ label, children, textAlign }) => (
  <div className="is-flex form__field">
    <div
      className={clsx('field', {
        'has-text-left': textAlign === 'left',
        'has-text-centered': textAlign === 'center',
        'has-text-right': textAlign === 'right'
      })}
    >
      <label className="label has-text-grey-lighter">{label}</label>
      {children}
    </div>
  </div>
);

export default FormField;

FormField.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
};
