import React, { useState } from "react";
import Todos from "./Todos";
import useForm from "../components/Form/useForm";
import MiniDashboard from "./MiniDashboard";
import SearchInput from "./SearchInput";
import { useSelector } from "react-redux";

const Input = () => {
  const { handleSubmit, value, handleChange } = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const data = useSelector((state) => state);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterTodos = (todos, searchTerm) => {
    return todos.filter((todo) => todo.todo.indexOf(searchTerm) !== -1);
  };

  return (
    <>
      <SearchInput handleSearchChange={handleSearchChange} />
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

      <MiniDashboard todos={data} />
      <Todos newTodos={filterTodos(data, searchTerm)} />
    </>
  );
};

export default Input;
