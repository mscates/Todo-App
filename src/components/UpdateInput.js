import React from "react";
import useUpdateForm from "../components/Form/useUpdateForm";
import PropTypes from "prop-types";

const UpdateInput = ({ todo, setShowForm }) => {
  const { handleChange, handleSubmit, updateValues, handleClose } =
    useUpdateForm({
      todo,
      setShowForm,
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          value={updateValues.todo}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
      </form>
    </>
  );
};

UpdateInput.propTypes = {
  setShowForm: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default UpdateInput;
