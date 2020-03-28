import React from 'react';
import genie from '../../assets/genie.png';

import './header.scss';

const Header = () => (
  <div className="is-flex header__container">
    <img src={genie} className="header__img" />
    <div className="has-text-centered header__text">Music Jinn</div>
  </div>
);

export default Header;
