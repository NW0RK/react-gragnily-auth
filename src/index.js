import React from "react";
import ReactDOM from "react-dom/client";
// style.css is likely imported in App.js or here, ensure it's imported once.
// If not already imported in App.js: import './style.css'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
