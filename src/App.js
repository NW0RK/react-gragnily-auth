import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import "./style.css"; // Import the global CSS
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
