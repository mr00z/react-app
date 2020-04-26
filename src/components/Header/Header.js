import React from 'react';
import { useHistory } from 'react-router-dom';
import genie from '../../assets/genie.png';

import './header.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header__container">
      <div className="header__container header__logo" onClick={() => history.push('/')}>
        <img src={genie} className="header__img" />
        <div className="has-text-centered header__text">Music Jinn</div>
      </div>
    </div>
  );
};
export default Header;
