import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './navigation.scss';
import Menu from '../bulma/Menu';
import HamburgerButton from './HamburgerButton';
import Icon from '../Icon/Icon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      {isOpen && (
        <div
          className={styles.navigation__shadow}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
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
            <Menu.List>
              <Menu.ListItem
                isActive
                text="Music Jinn"
                icon={<Icon name="headphones" />}
              />
              <Menu.ListItem
                text="Music Preferences"
                icon={<Icon name="cog" />}
              />
              <Menu.ListItem text="Songs Bank" icon={<Icon name="music" />} />
            </Menu.List>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
