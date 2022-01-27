import React from "react";
import { Search } from ".";

function ProjectList(props) {
  
  return (
    <section className="container projects-grid max-width" id="project-list">
      <h3>Projects</h3>
      <Search />
    </section>
  );
}

export default ProjectList;
