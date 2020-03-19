import React from 'react';
import headphones from '../../assets/music.png';

import './header.scss';

const Header = () => (
  <div
    className='is-flex'
    style={{ alignItems: 'center', justifyContent: 'center' }}
  >
    <img src={headphones} className='header__img' />
    <div className='has-text-centered has-text-grey-lighter header__text'>
      Music Jinn
    </div>
  </div>
);

export default Header;
