import React from "react";

function ProjectItem(props) {

    const projectItem = props.projects.map((val) => {
            return(
                <div className="project-box">
                    <div>
                        {val.name}
                    </div>
                    <div>
                        {val.techStack}
                    </div>
                </div>
            )
    })

  return (
        <>
            {projectItem}
        </>
      )
}

export default ProjectItem;
