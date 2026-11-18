import React from "react";
import { Link } from "react-router-dom";
import "./Biography-mobile.css";
import "./Biography.css";

const Biography = ({ active }) => {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>Hello, I&apos;m Edward Ugwu.</h1>
          <div className="avi">
            <img src="/prime.jpeg" alt="Portrait of Edward Nnaemeka Ugwu" />
          </div>
        </div>
        <div className="description">
          <p>
            <span>
              <span className="highlight">Frontend Engineer</span> with 6+ years
              of experience building{" "}
              <span className="highlight">responsive web</span> and{" "}
              <span className="highlight">mobile experiences</span> with React,
              React Native, Next.js, and TypeScript. I deliver{" "}
              <span className="highlight">
                performant, maintainable interfaces
              </span>{" "}
              across healthcare, logistics, e-commerce, education, and AI
              products.
            </span>
          </p>
        </div>
        <div className="go_button_container">
          <Link to="/project" className="explore">
            <button type="button" className="explore">
              View Projects
            </button>
          </Link>
          <Link to="/contact">
            <button type="button">Contact</button>
          </Link>
        </div>
      </div>
      <nav aria-label="Primary">
        <ul>
          <li className={active === "project" ? "active_menu" : ""}>
            <small>
              <span>00</span>
              <Link to="/project">
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

          <li className={active === "contact" ? "active_menu" : ""}>
            <small>
              <span>03</span>
              <Link to="/contact">
                <span className="menu_bullet"></span> CONTACT
              </Link>
            </small>
          </li>
        </ul>
      </nav>
      <div className="footer">
        <img src="/prime.jpeg" alt="Portrait of Edward Nnaemeka Ugwu" />
        <div className="social">
          <a
            href="https://github.com/Nnvemeka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i> GitHub
          </a>

          <a
            href="https://twitter.com/nnvemeka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
          </a>

          <a
            href="https://www.linkedin.com/in/nnvemeka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
          </a>

          <a href="mailto:nnvedward@gmail.com">
            <i className="fas fa-at" aria-hidden="true"></i> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Biography;
