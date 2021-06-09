import React, { useState } from "react";
import useForm from "../components/Form/useForm";


const Input = () => {
  const { handleSubmit, value, handleChange } = useForm();
  
  return (
    <>
      
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="add-todo todo"
          type="text"
          value={value.todo}
          name="todo"
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
