import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";
import Button from "../../shared/button/Button";
import { projects } from "../../utils/projectLists";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="portfolio_showcase">
        <h3 className="title">Selected Projects</h3>
        {projects.map((project, index) => (
          <ProjectCard {...project} key={project.id} index={index} />
        ))}
      </div>
      <div>
        <Button
          previous={{ url: "/contact", text: "Contact" }}
          next={{ url: "/resume", text: "Resume" }}
        />
      </div>
    </div>
  );
};

export default Project;
