import { useState, useContext } from "react";
import { TodoContext } from "../../App";

const useForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "") {
      const todo = { content, completed: false, id: Date.now() };
      dispatch({ type: "ADD_TODO", payload: { todo } });
      setContent("");
    }
  };

  return { handleChange, content, handleSubmit };
};

export default useForm;
