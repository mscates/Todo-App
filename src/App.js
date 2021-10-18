import React, { useState, createContext, useContext, useReducer } from "react";
import "./App.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import MiniDashboard from "./components/MiniDashboard";
import Todos from "./components/Todos";
import SearchInput from "./components/SearchInput";
import TodoReducer from './reducer'
export const TodoContext = createContext({
  todos: [],
});
export const SearchContext = createContext()

function App() {
  
  const initialPostState = useContext(TodoContext);
  const [state, dispatch] = useReducer(TodoReducer, initialPostState);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <TodoContext.Provider value={{state, dispatch}}>
    <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
      <div className="hero">
        <div className="main-container">
          <Header title="Todo List App" />
          <SearchInput handleSearchChange={handleSearchChange} />
          <Input />
          <MiniDashboard todos={state.todos} />
          <Todos todos={state.todos} searchTerm={searchTerm} />
        </div>
      </div>
      </SearchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
