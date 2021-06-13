import React, { useState } from "react";
import useUpdateForm from "../components/Form/useUpdateForm";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const UpdateInput = ({ content, id, setShowForm }) => {
  const [updateValues, setUpdateValues] = useState({
    content,
    id,
    showForm: content.showForm,
  });
  const { handleSubmit, handleClose } =
    useUpdateForm({
      ...updateValues,
      id,
      setShowForm,
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="content"
          type="text"
          value={updateValues.content}
          onChange={(e) => setUpdateValues({content: e.target.value})}
        />
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
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default UpdateInput;
