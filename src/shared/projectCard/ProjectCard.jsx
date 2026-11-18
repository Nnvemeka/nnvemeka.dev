import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({
  id,
  index,
  title,
  description,
  github,
  live,
  stack,
  isPrivate,
  fullWidth,
  isPackage,
}) => (
  <div
    className={`box_container ${
      index % 2 !== 0 && !fullWidth ? "box_container_pad" : ""
    } ${fullWidth ? "box_container_full" : ""}`}
  >
    <div className="box">
      <div className="project_details">
        <h3>{title}</h3>
        <small>{stack}</small>
        <p>{description}</p>
      </div>
      <div className="project_links_container">
        <div className="project_links">
          <small className="hover-effect">
            <Link to={`/preview/${id}`}>
              {isPackage ? (
                <span>
                  <i className="fas fa-cube" aria-hidden="true"></i> Package
                </span>
              ) : (
                <span>
                  <i className="fas fa-eye" aria-hidden="true"></i> Details
                </span>
              )}
            </Link>
          </small>
          {!isPrivate && github ? (
            <small className="hover-effect">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-hidden="true"></i> Code
              </a>
            </small>
          ) : null}
        </div>
        {live ? (
          <a
            href={live}
            className="project_preview_container"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} live`}
          >
            <span className="project_preview">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>
        ) : null}
      </div>
    </div>
  </div>
);

export default ProjectCard;
