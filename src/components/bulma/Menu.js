import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Menu = ({ classNames, children }) => {
  return <aside className={`menu ${classNames}`}>{children}</aside>;
};

const Label = ({ text }) => <p className='menu-label'>{text}</p>;

const List = ({ children }) => <ul className='menu-list'>{children}</ul>;

const ListItem = ({ text, isActive }) => (
  <li>
    <a className={clsx({ 'is-active': isActive })}>{text}</a>
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
  isActive: PropTypes.bool
};

Menu.Label = Label;
Menu.List = List;
Menu.ListItem = ListItem;

export default Menu;
