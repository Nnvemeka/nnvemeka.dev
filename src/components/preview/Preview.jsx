import React from "react";
import { useParams, Link } from "react-router-dom";

import { projects } from "../../utils/projectLists";
import "./Preview.css";
import Button from "../../shared/button/Button";

const Preview = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id == id);

  return (
    <div className="preview">
      <Link to={"/project"}>
        <small className="project_preview">
          <i className="fas fa-arrow-left"></i>
        </small>
      </Link>
      <h3 className="title">{project?.title}</h3>
      {project?.images.map((image, index) => (
        <div key={index} className="preview_image_container">
          <img src={image} alt={"Gallery"} className="preview_image" />
        </div>
      ))}

      <div className="preview_details">
        <small>{project?.stack}</small>
        <p style={{ marginBottom: "1em" }}>{project?.description}</p>
      </div>
      <div className="preview_link_container">
        <small className="hover-effect">
          <a
            href={project?.live}
            className="project_preview_container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small className="project_preview">
              <i className="fas fa-arrow-right"></i>
            </small>
          </a>
        </small>
        {!project?.isPrivate ? (
          <small className="preview_code">
            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-github"
                style={{ color: "#bebebe" }}
              ></i>
            </a>
          </small>
        ) : null}
      </div>

      <div>
        <Button
          previous={{ url: "/project", text: "Projects" }}
          next={{ url: "/resume", text: "Resume" }}
        />
      </div>
    </div>
  );
};

export default Preview;
