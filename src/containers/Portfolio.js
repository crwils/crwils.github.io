import React, {useState} from 'react';
import { Header, NavBar, ProjectItem, ProjectList, About } from '../components';

function Portfolio(props) {

    const [state, setState] = useState(0);


    function handleClick(event) {
        event.preventDefault()
        setState(state+1)
        console.log("clicked");
    }


    return (
        <main>
            <section className="header-index">
                <NavBar click={handleClick} />
                <Header />
            </section>
                <About />
                <ProjectList />
        </main>
        
    );
}

export default Portfolio;