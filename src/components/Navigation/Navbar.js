import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './navigation.scss';
import Menu from '../bulma/Menu';
import HamburgerButton from './HamburgerButton';
import Icon from '../Icon/Icon';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleChangeNavbarState = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <div
          className={styles.navigation__shadow}
          onClick={handleChangeNavbarState}
        />
      )}
      <nav role="navigation">
        <HamburgerButton
          onClick={handleChangeNavbarState}
          isNavbarOpen={isOpen}
        />
        <div
          className={clsx(styles.navigation__navbar_active, {
            'slide-in': isOpen === true,
            'slide-out': isOpen === false
          })}
        >
          <img src={logo} alt="Logo" />
          <Menu>
            <Menu.List>
              <Menu.ListItem>
                <NavLink
                  to="/"
                  exact
                  activeClassName="is-active"
                  className="is-size-4"
                  onClick={handleChangeNavbarState}
                >
                  <Icon name="headphones" /> Music Jinn
                </NavLink>
              </Menu.ListItem>
              <Menu.ListItem>
                <NavLink
                  to="/preferences"
                  activeClassName="is-active"
                  className="is-size-4"
                  onClick={handleChangeNavbarState}
                >
                  <Icon name="cog" /> Music Preferences
                </NavLink>
              </Menu.ListItem>
              <Menu.ListItem>
                <NavLink
                  to="/songsBank"
                  activeClassName="is-active"
                  className="is-size-4"
                  onClick={handleChangeNavbarState}
                >
                  <Icon name="music" /> Songs Bank
                </NavLink>
              </Menu.ListItem>
            </Menu.List>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
