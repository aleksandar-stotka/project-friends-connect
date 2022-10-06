import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './queries.css';







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
