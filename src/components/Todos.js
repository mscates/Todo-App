import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import propTypes from "prop-types";

const Todos = ({ newTodos }) => {
  const data = useSelector((state) => state);
  const todos = data.map((item, index) => (
    <Todo className={index} key={item.id} todo={item} />
  ));
  const newFilteredTodos = newTodos.map((item, index) => (
    <Todo className={index} key={item.id} todo={item} />
  ));
  return (
    <div className="todos-container">
      <ul>{newFilteredTodos ? newFilteredTodos : todos}</ul>
    </div>
  );
};

Todos.propTypes = {
  newTodos: propTypes.array.isRequired,
};

export default Todos;
