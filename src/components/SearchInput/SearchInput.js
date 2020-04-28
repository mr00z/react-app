import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './searchInput.scss';

const SearchInput = ({ value, onInputChange, onButtonClick, placeholder, onReset }) => {
  const [shouldShowReset, setShouldShowReset] = useState(false);

  const handleSearch = () => {
    onButtonClick();
    setShouldShowReset(true);
  };

  const handleReset = () => {
    onReset();
    setShouldShowReset(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
      setShouldShowReset(true);
    }
  };

  return (
    <div className={`field is-grouped ${styles.container}`}>
      <div className={`control has-icons-left ${styles.input}`}>
        <input
          className="input"
          type="text"
          placeholder={placeholder}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <Icon name="search" classNames="is-left" />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {onReset && shouldShowReset && (
        <div className="control">
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  onButtonClick: PropTypes.func,
  placeholder: PropTypes.string,
  onReset: PropTypes.func,
};

export default SearchInput;
