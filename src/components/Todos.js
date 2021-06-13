import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos, searchTerm }) => {
  const filterTodos = (todos, searchTerm) => {
    return todos.filter((todo) => todo.content.indexOf(searchTerm) !== -1);
  };

  const renderTodos = (arr, searchTerm) => {
    if (searchTerm) {
      const filteredTodos = filterTodos(arr, searchTerm).map((item, index) => (
        <Todo className={index} key={item.id} {...item} />
      ));
      return filteredTodos;
    }
    return arr.map((item, index) => (
      <Todo className={index} key={item.id} {...item} />
    ));
  };

  return (
    <div className="todos-container">
      <ul>{renderTodos(todos, searchTerm)}</ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default Todos;
