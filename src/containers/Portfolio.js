import React, {useState} from 'react';
import { Header, NavBar, ProjectList, About, Counter, Display } from '../components';
import myProjectList from '../assets/myProjects';

function Portfolio(props) {

    const [state, setState] = useState(0);
        // assigning the myprojectlist object to state
        const [myProjects, setMyProjects] = useState({
            projects: myProjectList,
        })

    return (
        <main>
            <section className="header-index">
                <NavBar state={state} setState={setState} increment={5}/>
                <Header />
            </section>
            <section >
                {/* <div className="counter">
                <Counter state={state} setState={setState} increment={5}/>
                <Counter state={state} setState={setState} increment={10}/>
                <Counter state={state} setState={setState} increment={15}/>
                <Counter state={state} setState={setState} increment={20}/>
                </div> */}
                {/* <Display state={state} /> */}
                <About />
                <ProjectList projects={myProjects} />
            </section>
        </main>
        
    );
}

export default Portfolio;