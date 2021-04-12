import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GeneralState from "./contexts/GeneralState";

ReactDOM.render(
  <React.StrictMode>
    <GeneralState>
      <App />
    </GeneralState>
  </React.StrictMode>,
  document.getElementById("root")
);
