import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import MiniDashboard from "./components/MiniDashboard";
import Todos from "./components/Todos";
import SearchInput from "./components/SearchInput";
import { useSelector } from "react-redux";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const data = useSelector((state) => state);

  const filterTodos = (todos, searchTerm) => {
    return todos.filter((todo) => todo.todo.indexOf(searchTerm) !== -1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="hero">
      <div className="main-container">
        <Header title="Todo List App" />
        <SearchInput handleSearchChange={handleSearchChange} />
        <Input />
        <MiniDashboard todos={data} />
        <Todos newTodos={filterTodos(data, searchTerm)} />
      </div>
    </div>
  );
}

export default App;
