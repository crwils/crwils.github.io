import React, {useState, useEffect} from 'react';
import { Header, NavBar, ProjectItem, ProjectList } from '../components';

function Portfolio(props) {

    const [state, setState] = useState(0);

    useEffect (() => {
        setState(state+1)
    })



    return (
        <>
            <NavBar />
            <Header />
            <ProjectList state={state} />
            <ProjectItem />
        </>
        
    );
}

export default Portfolio;