import React, { useState, useContext } from "react";
import UpdateInput from "./UpdateInput";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../App";

const Todo = ({ content, id, className }) => {
  const { dispatch } = useContext(TodoContext);
  const [showForm, setShowForm] = useState(false);
  const [todoCompleted, setTodoCompleted] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setTodoCompleted(e.target.checked);
    handleComplete();
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  const handleComplete = () => {
    dispatch({ type: "COMPLETE_TODO", payload: { id, todoCompleted } });
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
              name="completed"
              value={todoCompleted}
              checked={todoCompleted}
              onChange={handleChange}
            />
            {showForm ? (
              <UpdateInput
                content={content}
                id={id}
                setShowForm={setShowForm}
              />
            ) : (
              <span className={todoCompleted ? "strike" : null}>{content}</span>
            )}
          </li>
          <div className="todo-actions">
            {!todoCompleted ? (
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleShowForm()}
                className=""
              >
                Edit
              </FontAwesomeIcon>
            ) : null}

            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} className="">
              Delete
            </FontAwesomeIcon>
          </div>
        </div>
      </div>
    </>
  );
};

Todo.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  className: PropTypes.number.isRequired,
};

export default Todo;
