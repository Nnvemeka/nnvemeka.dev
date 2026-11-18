import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ previous, next }) => (
  <div className="go_button_container">
    <Link to={previous.url}>
      <button type="button">
        <i className="fas fa-arrow-left" aria-hidden="true"></i> {previous.text}
      </button>
    </Link>
    <Link to={next.url}>
      <button type="button">
        {next.text} <i className="fas fa-arrow-right" aria-hidden="true"></i>
      </button>
    </Link>
  </div>
);

export default Button;