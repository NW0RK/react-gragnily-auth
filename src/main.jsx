import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// style.css is likely imported in App.jsx or here, ensure it's imported once.
// If not already imported in App.jsx: import './style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
