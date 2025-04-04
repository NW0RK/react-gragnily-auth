import React from "react";
import { Link } from "react-router-dom"; // Import Link
import AuthLayout from "../components/AuthLayout"; // Import the layout

const LogIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Log In form submitted");
  };

  return (
    <AuthLayout>
      {" "}
      {/* Wrap content in the layout */}
      <h2>Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="forgot-password-link">
          {/* Use a standard anchor tag if it links outside the React app,
              or Link if it goes to another route like /forgot-password */}
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" className="btn-auth">
          {" "}
          {/* Use consistent button class */}
          Log In
        </button>
      </form>
      <p className="toggle-link">
        {" "}
        {/* Use consistent link class */}
        Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
        {/* Link to signup */}
      </p>
    </AuthLayout>
  );
};

export default LogIn;
