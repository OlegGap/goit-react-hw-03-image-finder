import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.scss';

const SearchForm = ({ submit, onChange, currentValue }) => {
  return (
    <form className={styles.searchForm} onSubmit={submit}>
      <input
        onChange={onChange}
        autoComplete="off"
        type="text"
        id="search"
        value={currentValue}
        placeholder="Search images..."
      />
    </form>
  );
};

SearchForm.defaultProps = {
  currentValue: '',
};

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  currentValue: PropTypes.string,
};

export default SearchForm;
