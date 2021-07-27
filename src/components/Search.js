import React, { useState, useEffect } from 'react';
import { ProjectItem } from '.';
import myProjectList from '../assets/myProjects';

function Search(props) {

    const [search, setSearch] = useState("");

    const filteredProjects = myProjectList.filter(val => val == "" ? val : val.name.toLowerCase().includes(search.toLowerCase()) || val.techStack.toLowerCase().includes(search.toLowerCase()) )

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
        console.log(search)
        console.log(filteredProjects);
    }  

    return (
    <>
        <form action="">
            <input type="text" 
            placeholder="Search projects" 
            onChange={handleSearchChange}
            />
        </form>
        <div className="project-items">
            <ProjectItem projects={filteredProjects} />
        </div>
    </>
    );
}

export default Search;