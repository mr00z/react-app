import React from 'react';
import { useHistory } from 'react-router-dom';
import genie from '../../assets/genie.png';

import styles from './header.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={`${styles.container} ${styles.logo}`} onClick={() => history.push('/')}>
        <img src={genie} className={styles.img} alt="Logo icon" />
        <div className={`has-text-centered ${styles.text}`}>Music Jinn</div>
      </div>
    </div>
  );
};
export default Header;
