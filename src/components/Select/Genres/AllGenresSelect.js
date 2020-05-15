import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import useSongsGenres from './useSongsGenres';
import theme from '../theme';

import styles from '../styles.scss';

const AllGenresSelect = ({ placeholder, isMulti, onChange, name, className, ...otherProps }) => {
  const [allGenres, isLoading] = useSongsGenres();
  return (
    <Select
      theme={theme}
      options={allGenres?.map((element) => ({ value: element, label: element }))}
      placeholder={placeholder}
      name={name}
      className={`${styles.custom_select} has-text-grey-dark ${className}`}
      isMulti={isMulti}
      onChange={onChange}
      isLoading={isLoading}
      {...otherProps}
    />
  );
};

AllGenresSelect.propTypes = {
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default AllGenresSelect;
