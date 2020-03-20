import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './navigation.scss';

const HamburgerButton = ({ onClick, isNavbarOpen }) => (
  <div
    className={clsx(styles.navigation__hamburger_button, {
      change: isNavbarOpen
    })}
    onClick={onClick}
  >
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </div>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
  isNavbarOpen: PropTypes.bool
};

export default HamburgerButton;
