import React, {useState} from 'react';
import { Header, NavBar, ProjectList, About } from '../components';

function Portfolio(props) {
    
    // assigning the myprojectlist object to state

    return (
        <main>
            <section className="header-index">
                <NavBar />
                <Header />
            </section>
            <section >
                <About />
                <ProjectList />
            </section>
        </main>
        
    );
}

export default Portfolio;