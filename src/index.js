import React from "react";
import ReactDOM from "react-dom";
import configStore from "./store/configureStore";
import { Provider } from 'react-redux'
import App from "./App";

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
