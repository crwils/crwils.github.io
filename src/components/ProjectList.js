import React from "react";

import { ProjectItem, Form } from ".";

function ProjectList(props) {
  
  return (
    <div className="projects-grid max-width">
      <h3>Projects</h3>
      <Form />
      <div className="project-items">
        <ProjectItem projects={props.projects} />
      </div>
    </div>
  );
}

export default ProjectList;
