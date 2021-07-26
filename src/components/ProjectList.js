import React from "react";
import { ProjectItem } from ".";

function ProjectList(props) {
  const myProjects = props.projects.projects.map((project) => {
    return (
      <div className="project-container">
        <div className="project-box">
          <div>{project.name}</div>
          <div className="techStack small">{project.techStack}</div>
        </div>
      </div>
    );
  });

  // can change the above funciton to render a ProjectItem then return the project item below
  return (
    <div className="projects-grid max-width">
      <h3>Projects</h3>
      <div className="project-items">
        <ProjectItem projects={myProjects} />
      </div>
    </div>
  );
}

export default ProjectList;
