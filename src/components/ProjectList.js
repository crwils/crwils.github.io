import React from "react";

import { ProjectItem, Search } from ".";

function ProjectList(props) {
  
  return (
    <div className="projects-grid max-width">
      <h3>Projects</h3>
      <Search />
      <div className="project-items">
        <ProjectItem projects={props.projects} />
      </div>
    </div>
  );
}

export default ProjectList;
