import React from 'react';

function ProjectItem(props) {

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
    
    return (

        <>
            {myProjects}
        </>



    );
}

export default ProjectItem;