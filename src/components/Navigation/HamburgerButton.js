import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './navigation.scss';

const HamburgerButton = ({ onClick, isNavbarOpen }) => (
  <div
    className={clsx(styles.hamburger_button, {
      [styles.change]: isNavbarOpen,
    })}
    onClick={onClick}
  >
    <div className={styles.bar1} />
    <div className={styles.bar2} />
    <div className={styles.bar3} />
  </div>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
  isNavbarOpen: PropTypes.bool,
};

export default HamburgerButton;
