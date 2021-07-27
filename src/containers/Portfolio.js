import React, {useState} from 'react';
import { Header, NavBar, ProjectList, About } from '../components';
import myProjectList from '../assets/myProjects';

function Portfolio(props) {
    
    // assigning the myprojectlist object to state
    const [myProjects, setMyProjects] = useState({
            projects: myProjectList,
    })

    return (
        <main>
            <section className="header-index">
                <NavBar />
                <Header />
            </section>
            <section >
                <About />
                <ProjectList projects={myProjects} />
            </section>
        </main>
        
    );
}

export default Portfolio;