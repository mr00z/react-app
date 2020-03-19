import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import styles from './navigation.scss';
import Menu from '../bulma/Menu';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      role='navigation'
      className={clsx({
        [styles.navigation__navbar_active]: isOpen
      })}
    >
      <IconContainer>
        <Icon
          name={isOpen ? 'times' : 'bars'}
          size='3x'
          onClick={() => setIsOpen(!isOpen)}
        />
      </IconContainer>
      {isOpen && (
        <Menu>
          <Menu.Label text='Test' />
          <Menu.List>
            <Menu.ListItem text='Test' />
          </Menu.List>
        </Menu>
      )}
    </nav>
  );
};

// eslint-disable-next-line react/prop-types
const IconContainer = ({ children }) => (
  <div className={styles.navigation__icon_container}>{children}</div>
);

export default Navbar;
