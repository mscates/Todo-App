import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../../store/todos";

const useForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    todo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.todo !== "") {
      dispatch(todoAdded(value));
      setValue({ todo: "" });
    }
  };

  return { handleChange, value, handleSubmit };
};

export default useForm;
