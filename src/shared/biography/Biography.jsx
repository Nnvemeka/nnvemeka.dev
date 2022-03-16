import React from "react";
import { Link } from 'react-router-dom'
import './Biography-mobile.css'
import './Biography.css'

const Biography = ({ active }) => (
    <div className="base_container">
        <div className="hero">
            <div className="intro_box">
                <h1>Fidelis Ekwunife</h1>
                <h3>Software Enginner</h3>
                <div className="avi">
                    <img src alt="avatar" />
                </div>
            </div>
            <div className="description">
                <p>
                    <span>
                        I build open <span className="highlight">front-end</span> and <span className="highlight">backend</span> libraries
                    </span>
                </p>
            </div>
            <div className="go_button_container">
                <Link to="/project" className="explore">
                <button className="explore">
                        Explore
                    </button>
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
        <img src alt="" />
        <div className="social">
          <a
            href="https://github.com/chiadikaobixo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Github
          </a>

          <a
            href="https://twitter.com/chiadikaobixo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> Twitter{" "}
          </a>

          <a
            href="chiadikaobixo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-at"></i> Email{" "}
          </a>
        </div>
      </div>
    </div>
)

export default Biography