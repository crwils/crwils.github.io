import React, {useState} from 'react';
import { Header, NavBar, ProjectList, About, Counter } from '../components';

function Portfolio(props) {

    const [state, setState] = useState(0);

    const handleClick = (event) => {
        event.preventDefault()
        setState(state+1)
        console.log("clicked") 
    };

    return (
        <main>
            <section className="header-index">
                <NavBar click={handleClick} />
                <Header />
            </section>
            <section>
                <Counter state={state}/>
                <About />
                <ProjectList />
            </section>
        </main>
        
    );
}

export default Portfolio;