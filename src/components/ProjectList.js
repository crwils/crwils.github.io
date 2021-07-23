import React from 'react';
import ProjectItem from './ProjectItem';
import myProjectList from '../assets/myProjects';

function ProjectList(props) {


    const myProjects = myProjectList.map((project) => {
        return (
            <div className="project-container">
                <div className="project-box">
                    <div>
                        {project.name}
                    </div>
                    <div>
                        {project.techStack}
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className="projects-grid max-width">
            <h3>Projects</h3>
            {myProjects}
        </div>
    );
}

export default ProjectList;