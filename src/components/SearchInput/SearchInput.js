import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './searchInput.scss';

const SearchInput = ({ onInputChange, onButtonClick, placeholder }) => {
  return (
    <div className={`field ${styles.container}`}>
      <div className="control has-icons-left has-text-black">
        <input className="input" type="text" placeholder={placeholder} onChange={onInputChange} />
        <Icon name="search" classNames="is-left" />
      </div>
      <button className="button" onClick={onButtonClick}>
        Search
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  onInputChange: PropTypes.func,
  onButtonClick: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchInput;
