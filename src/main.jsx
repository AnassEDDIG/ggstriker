import React from "react";
import ReactDOM from "react-dom"; // ✅ NOT 'react-dom/client'
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
