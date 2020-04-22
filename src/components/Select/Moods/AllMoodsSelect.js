import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import useSongsMoods from './useSongsMoods';
import theme from '../theme';

import styles from '../styles.scss';

const AllMoodsSelect = ({ placeholder, isMulti, onChange, name, className, ...otherProps }) => {
  const allMoods = useSongsMoods();
  return (
    <Select
      theme={theme}
      options={allMoods.map((element) => ({ value: element, label: element }))}
      placeholder={placeholder}
      name={name}
      className={`${styles.custom_select} has-text-grey-dark ${className}`}
      isMulti={isMulti}
      onChange={onChange}
      {...otherProps}
    />
  );
};

AllMoodsSelect.propTypes = {
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default AllMoodsSelect;
