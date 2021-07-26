import React from "react";

import { ProjectItem } from ".";

function ProjectList(props) {
  
  // can change the above funciton to render a ProjectItem then return the project item below
  return (
    <div className="projects-grid max-width">
      <h3>Projects</h3>
      <div className="project-items">
        <ProjectItem projects={props.projects} />
      </div>
    </div>
  );
}

export default ProjectList;
