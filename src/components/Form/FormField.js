import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './form.scss';

const FormField = ({ label, children, textAlign }) => (
  <div className={styles.field}>
    <div
      className={clsx('field', {
        'has-text-left': textAlign === 'left',
        'has-text-centered': textAlign === 'center',
        'has-text-right': textAlign === 'right',
      })}
    >
      {/* eslint-disable-next-line max-len */}
      <label className="label has-text-grey-lighter is-size-5-mobile is-size-4-tablet is-size-3-desktop is-size-4-widescreen">
        {label}
      </label>
      {children}
    </div>
  </div>
);

export default FormField;

FormField.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};
