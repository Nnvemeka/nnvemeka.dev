import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <div id="success">
      <div className="error_container">
        <h1>
          <i className="fas fa-check-double" aria-hidden="true"></i>
        </h1>
        <h2>Your message has been sent</h2>
        <p>I&apos;ll get back to you shortly. Thanks for reaching out.</p>
        <div className="go_button_container" style={{ display: "flex" }}>
          <Link to="/">
            <button type="button">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;