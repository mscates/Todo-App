import React, { useState, useEffect } from "react";
import UpdateInput from "./UpdateInput";
import { todoRemoved, todoCompleted } from "../store/todos";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

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

  const handleChange = () => {
    handleComplete()
  }

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
        className={`${className % 2 === 0 ? "todo cardEven" : "todo cardOdd"}`}
      >
        <div className="todo-body">
          <li className="update-todo">
            <input
            className="checkbox"
            type="checkbox"
            name="complete"
            checked={updateComplete.completed}
            onChange={handleChange}
            />
            {showForm ? (
              <UpdateInput setShowForm={setShowForm} todo={todo} />
            ) : (
              <span className={todo.completed ? "strike" : null}>
                {todo.todo}
              </span>
            )}
          </li>
          <div className="todo-actions">
            {!todo.completed ? (
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleShowForm()}
                className=""
              >
                Edit
              </FontAwesomeIcon>
            ) : null}

            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => handleDelete(todo.id)}
              className=""
            >
              Delete
            </FontAwesomeIcon>
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
