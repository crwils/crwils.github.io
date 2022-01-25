import React from "react";

function ProjectItem(props) {
    

    const projectItem = props.projects.map((val) => {
            return(
                <div key={val.name}className="project-box">
                    <div key={val.name}>
                        {val.name}
                    </div>
                    <div key={val.techStack}>
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
