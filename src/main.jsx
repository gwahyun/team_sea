import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <div className="w-full flex justify-center items-start">
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>
);
