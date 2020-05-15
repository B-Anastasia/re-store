import React from "react";
import "./error-indicator.css";
import { Link } from "react-router-dom";

const ErrorIndicator = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="error">
      <h1>Sorry</h1>
      <span>Looks like something went wrong on our end.</span>
      <span>Head back to Homepage.</span>
      <Link to="/" className="btn btn-warning outline-none" onClick={reload}>
        Go Back
      </Link>
    </div>
  );
};

export default ErrorIndicator;
