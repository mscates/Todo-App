import React from "react";
import PropTypes from "prop-types";

const MiniDashboard = ({ todos }) => {
  const findCompleted = () => {
    let compTodos = todos.filter((todo) => todo.completed === true);
    return compTodos.length;
  };
  return (
    <>
      <div>
        <h3>Total Todos: {todos.length}</h3>
        <h3>Completed Todos: {todos ? findCompleted() : null}</h3>
      </div>
    </>
  );
};

MiniDashboard.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default MiniDashboard;
