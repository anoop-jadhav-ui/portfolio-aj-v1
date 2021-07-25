import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Store from "./components/Store/Store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
