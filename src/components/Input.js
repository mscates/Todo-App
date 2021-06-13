import React from "react";
import useForm from "../components/Form/useForm";


const Input = () => {
  const { handleSubmit, content, handleChange } = useForm();
  
  return (
    <>
      
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="add-todo todo"
          type="text"
          value={content}
          name="content"
          onChange={handleChange}
          placeholder="Add Todo"
        />
        <button className="submit-todo" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Input;