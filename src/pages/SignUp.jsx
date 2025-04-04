import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import "../style.css"; // Make sure CSS is imported

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign Up form submitted");
  };

  return (
    <AuthLayout>
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        {/* New container for the columns */}
        <div className="form-columns">
          {/* Left Column */}
          <div className="form-column">
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
          </div>

          {/* Right Column */}
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Create a password"
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
          </div>
        </div>{" "}
        {/* End of form-columns */}
        {/* Button remains below the columns */}
        <button type="submit" className="btn-auth">
          Sign Up
        </button>
      </form>

      <p className="toggle-link">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
