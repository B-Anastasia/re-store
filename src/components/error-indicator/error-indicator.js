import React from "react";
import "./error-indicator.css";
import { Link } from "react-router-dom";

const ErrorIndicator = () => {
  return (
    <div className="error">
      <h1>Sorry</h1>
      <span>Looks like something went wrong on our end.</span>
      <span>Head back to Homepage.</span>
      <Link className="btn draw-border outline-none" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorIndicator;
