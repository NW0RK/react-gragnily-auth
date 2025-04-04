import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import AuthLayout from "../components/AuthLayout"; // Import the layout

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here (e.g., API call)
    console.log("Sign Up form submitted");
  };

  return (
    <AuthLayout>
      {" "}
      {/* Wrap content in the layout */}
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Choose a username"
          />
        </div>

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
            placeholder="Create a strong password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm_password"
            required
            placeholder="Enter your password again"
          />
        </div>

        <button type="submit" className="btn-auth">
          {" "}
          {/* Use consistent button class */}
          Sign Up
        </button>
      </form>
      <p className="toggle-link">
        {" "}
        {/* Use consistent link class */}
        Already have an account? <Link to="/login">Log In</Link>{" "}
        {/* Link to login */}
      </p>
    </AuthLayout>
  );
};

export default SignUp;
