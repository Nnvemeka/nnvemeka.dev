import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../utils/projectLists";
import "./Preview.css";
import Button from "../../shared/button/Button";

const Preview = () => {
  const { id } = useParams();
  const project = projects.find((item) => String(item.id) === String(id));

  if (!project) {
    return (
      <div className="preview">
        <Link to="/project" aria-label="Back to projects">
          <small className="project_preview">
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </small>
        </Link>
        <h3 className="title">Project not found</h3>
        <p>The requested project could not be found.</p>
        <Button
          previous={{ url: "/project", text: "Projects" }}
          next={{ url: "/contact", text: "Contact" }}
        />
      </div>
    );
  }

  return (
    <div className="preview">
      <Link to="/project" aria-label="Back to projects">
        <small className="project_preview">
          <i className="fas fa-arrow-left" aria-hidden="true"></i>
        </small>
      </Link>
      <h3 className="title">{project.title}</h3>
      {project.images.map((image, index) => (
        <div key={`${project.id}-${index}`} className="preview_image_container">
          <img
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="preview_image"
            loading="lazy"
          />
        </div>
      ))}

      <div className="preview_details">
        <small>{project.stack}</small>
        <p style={{ marginBottom: "1em" }}>{project.description}</p>
        {project.role ? (
          <p>
            <strong>Role:</strong> {project.role}
          </p>
        ) : null}
        {project.highlights?.length ? (
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem", color: "#bebebe" }}>
            {project.highlights.map((item) => (
              <li key={item} style={{ marginBottom: "0.35rem" }}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="preview_link_container">
        {project.live ? (
          <a
            href={project.live}
            className="project_preview_container"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live`}
          >
            <small className="project_preview">
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </small>
          </a>
        ) : null}
        {!project.isPrivate && project.github ? (
          <small className="preview_code">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" aria-hidden="true" style={{ color: "#bebebe" }}></i>{" "}
              View code
            </a>
          </small>
        ) : null}
      </div>

      <div>
        <Button
          previous={{ url: "/project", text: "Projects" }}
          next={{ url: "/contact", text: "Contact" }}
        />
      </div>
    </div>
  );
};

export default Preview;
