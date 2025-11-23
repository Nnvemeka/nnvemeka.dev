import React from "react";
import { Link } from "react-router-dom";
import "./Biography-mobile.css";
import "./Biography.css";

const Biography = ({ active }) => {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>Hello, I'm Edward Ugwu.</h1>
          <div className="avi">
            <img src="https://i.ibb.co/SNNsRFd/nnaemeka.png" alt="avatar" />
          </div>
        </div>
        <div className="description">
          <p>
            <span>
              An experienced{" "}
              <span className="highlight">Frontend Engineer</span> specializing
              in developing{" "}
              <span className="highlight">responsive websites</span> and{" "}
              <span className="highlight">web applications</span> using modern{" "}
              <span className="highlight">web technologies</span> to provide a{" "}
              <span className="highlight">beautiful</span>,{" "}
              <span className="highlight">intuitive user experience</span> and
              drive maximum engagement and conversions.
            </span>
          </p>
        </div>
        <div className="go_button_container">
          <Link to="/project" className="explore">
            <button className="explore">Explore</button>
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <li className={active === "project" ? "active_menu" : ""}>
            <small>
              <span>00</span>
              <Link to="/">
                <span className="menu_bullet"></span> PROJECTS
              </Link>
            </small>
          </li>

          <li className={active === "resume" ? "active_menu" : ""}>
            <small>
              <span>01</span>
              <Link to="/resume">
                <span className="menu_bullet"></span> RESUME
              </Link>
            </small>
          </li>

          <li className={active === "article" ? "active_menu" : ""}>
            <small>
              <span>02</span>
              <Link to="/article">
                <span className="menu_bullet"></span> ARTICLES
              </Link>
            </small>
          </li>
        </ul>
      </nav>
      <div className="footer">
        <img src="https://i.ibb.co/SNNsRFd/nnaemeka.png" alt="avatar" />
        <div className="social">
          <a
            href="https://github.com/Nnvemeka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>Github
          </a>

          <a
            href="https://twitter.com/nnvemeka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>Twitter{" "}
          </a>

          <a href="https://www.linkedin.com/in/nnvemeka/">
            <i className="fab fa-linkedin"></i>LinkedIn <span>{"  "}</span>
          </a>

          <a
            href="mailto:nnvedward@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-at"></i> Email{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Biography;
