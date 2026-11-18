import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [closed, setClosed] = useState(true);
  const closeMenu = () => setClosed(true);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="logo_container">
          <Link
            to="/"
            onClick={closeMenu}
            style={{
              textDecoration: "none",
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
            }}
            aria-label="Go to home"
          >
            Nnvemeka.
          </Link>
        </div>
        <div className="menu_btn_wrapper">
          <button
            type="button"
            className={closed ? "menu_btn" : "menu_btn menu_btn_open"}
            onClick={() => setClosed(!closed)}
            aria-label={closed ? "Open menu" : "Close menu"}
            aria-expanded={!closed}
          >
            <span className="menu_btn_line"></span>
            <span className="menu_btn_line"></span>
          </button>
        </div>
      </div>
      {!closed ? (
        <nav aria-label="Mobile">
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/project" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={closeMenu}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/article" onClick={closeMenu}>
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="social_box">
              <h3>You can find me on</h3>
              <div className="social_icons">
                <a href="https://github.com/Nnvemeka" aria-label="GitHub">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/nnvemeka" aria-label="Twitter">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/nnvemeka/" aria-label="LinkedIn">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="mailto:nnvedward@gmail.com" aria-label="Email">
                  <i className="fas fa-at" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default Header;