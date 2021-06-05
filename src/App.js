import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import configStore from "./store/configureStore";
import { Provider } from "react-redux";
const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <div className="hero">
        <div className="main-container">
          <div>
            <Header title="Todo List App" />
          </div>
          <Input />
        </div>
      </div>
    </Provider>
  );
}

export default App;
