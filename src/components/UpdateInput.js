import React from "react";
import useUpdateForm from "../components/Form/useUpdateForm";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

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
        {/* <FontAwesomeIcon icon={faPencilAlt} /> */}
        <FontAwesomeIcon onClick={handleClose} icon={faWindowClose} />
        {/* <button type="submit">Update</button>
        <button type="button" onClick={handleClose}>
          Cancel
        </button> */}
      </form>
    </>
  );
};

UpdateInput.propTypes = {
  setShowForm: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default UpdateInput;
