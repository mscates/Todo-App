import React from "react";

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

export default SearchInput;
