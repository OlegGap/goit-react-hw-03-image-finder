import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.scss';

const SearchForm = ({ submit }) => (
  <form className={styles.searchForm} onSubmit={submit}>
    <input
      autoComplete="off"
      type="text"
      id="search"
      placeholder="Search images..."
    />
  </form>
);

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SearchForm;
