import React, { useState, useEffect } from "react";
import UpdateInput from "./UpdateInput";
import { todoRemoved, todoCompleted } from "../store/todos";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const Todo = ({ todo, className }) => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [updateComplete, setUpdateComplete] = useState({
    todo: todo.todo,
    id: todo.id,
    completed: todo.completed,
  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    dispatch(todoCompleted(updateComplete));
  }, [updateComplete.completed]);

  const handleDelete = (id) => {
    dispatch(todoRemoved(id));
  };

  const handleComplete = () => {
    setUpdateComplete((prevState) => ({
      ...prevState,
      completed: !prevState.completed,
    }));
  };

  return (
    <>
      <div
        className={`${
          className % 2 === 0 ? "todo cardColorLight" : "todo cardColorDark"
        }`}
      >
        {/* <p>Todo 1</p>

        <p>
          {todo.completed ? (
            <span className="">flawless victory</span>
          ) : (
            <span className="">null</span>
          )}
        </p> */}
        <div className="todo-body">
          <li className="update-todo">
            {showForm ? (
              <UpdateInput setShowForm={setShowForm} todo={todo} />
            ) : (
              <span className={todo.completed ? "strike" : null}>
                {todo.todo}
              </span>
            )}
          </li>
          <div className="todo-actions">
            {/* <button onClick={() => handleComplete()} className="">
              Complete
            </button> */}
            {!todo.completed ? (
              <button onClick={() => handleShowForm()} className="">
                Edit
              </button>
            ) : null}

            <button onClick={() => handleDelete(todo.id)} className="">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  className: PropTypes.number.isRequired,
};

export default Todo;
