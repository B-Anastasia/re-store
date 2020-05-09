import React from "react";
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error">
      <h1>Sorry</h1>
      <span>Looks like something went wrong on our end.</span>
      <span>Head back to Homepage.</span>
      <a className="btn draw-border outline-none" to="/">
        Go Back
      </a>
    </div>
  );
};

export default ErrorIndicator;
