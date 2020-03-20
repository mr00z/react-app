import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './navigation.scss';
import Menu from '../bulma/Menu';
import HamburgerButton from './HamburgerButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      {isOpen && <div className={styles.navigation__shadow} />}
      <nav role="navigation">
        <HamburgerButton
          onClick={() => setIsOpen(!isOpen)}
          isNavbarOpen={isOpen}
        />
        <div
          className={clsx(styles.navigation__navbar_active, {
            'slide-in': isOpen,
            'slide-out': !isOpen
          })}
        >
          <Menu>
            <Menu.Label text="Test" />
            <Menu.List>
              <Menu.ListItem text="Test" />
            </Menu.List>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
