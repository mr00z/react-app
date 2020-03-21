import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Menu = ({ classNames, children }) => {
  return <aside className={`menu ${classNames}`}>{children}</aside>;
};

const Label = ({ text }) => <p className="menu-label is-size-5">{text}</p>;

const List = ({ children }) => <ul className="menu-list">{children}</ul>;

const ListItem = ({ text, isActive, icon }) => (
  <li>
    <a className={clsx('is-size-4', { 'is-active': isActive })}>
      {icon} {text}
    </a>
  </li>
);

Menu.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.node
};

Label.propTypes = {
  text: PropTypes.string
};

List.propTypes = {
  children: PropTypes.node
};

ListItem.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.node
};

Menu.Label = Label;
Menu.List = List;
Menu.ListItem = ListItem;

export default Menu;
