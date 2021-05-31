import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoUpdated } from "../../store/todos";
import PropTypes from "prop-types";

const useUpdateForm = ({ todo, setShowForm }) => {
  const dispatch = useDispatch();
  const [updateValues, setUpdateValues] = useState({
    todo: todo.todo,
    id: todo.id,
    showForm: todo.showForm,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateValues({
      ...updateValues,
      [name]: value,
      showForm: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todoUpdated(updateValues));
    setShowForm(false);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return { handleChange, updateValues, handleSubmit, handleClose };
};

useUpdateForm.propTypes = {
  todo: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default useUpdateForm;
