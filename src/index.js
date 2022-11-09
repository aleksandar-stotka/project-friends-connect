import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import './variables/Variables.scss';


import { AuthContextProvider } from "./context/AuthContext";
import { AppProvider } from "./globalContext/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
