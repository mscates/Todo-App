import { useContext } from "react";
import { TodoContext, SearchContext } from "../../App";
import PropTypes from "prop-types";

const useUpdateForm = ({ content, id, setShowForm }) => {
  const { dispatch } = useContext(TodoContext);
  const { setSearchTerm } = useContext(SearchContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TODO", payload: { id, content }})
    setShowForm(false);
    setSearchTerm("")
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return { handleSubmit, handleClose };
};

useUpdateForm.propTypes = {
  content: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default useUpdateForm;
