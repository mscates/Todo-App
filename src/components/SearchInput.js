import React from "react";
import PropTypes from 'prop-types'

const SearchInput = ({ handleSearchChange }) => {

  return (
    <input
      className="search-todo"
      placeholder="Search Todos"
      type="text"
      onChange={handleSearchChange}
    />
  );
};

SearchInput.propTypes = {
  handleSearchChange: PropTypes.func.isRequired
}

export default SearchInput;
