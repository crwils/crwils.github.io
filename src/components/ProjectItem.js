import React from "react";

function ProjectItem(props) {

  // projects is being passed down from app>projectlist>projectitem
  const myProjects = props.projects.map((project, key) => {
    return (
      <div className="project-container">
        <div className="project-box" key={key}>
          <div>{project.name}</div>
          <div className="techStack small">{project.techStack}</div>
        </div>
      </div>
    );
  });

  return (
        <>{myProjects}</>
      )
}

export default ProjectItem;
