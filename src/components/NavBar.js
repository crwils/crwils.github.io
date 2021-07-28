import React from 'react';
import { Link } from 'react-router-dom'
import myavatar from "../myavatar.png" 
import "../style.css"

function NavBar(props) {

    return (
        <nav>
            <div className="max-width">
                <a className="icon-me" title="link to homepage" href=".">
                    <img type="button" src={myavatar} alt="A photograph of me" />
                </a>
                <ul>
                    {/* <li>Home</li> */}
                    <Link to='/'>Home</Link>
                    {/* <li>About</li> */}
                    <Link to='/about'>About</Link>
                    {/* <li>Projects</li> */}
                    <Link to='/projectlist'>Projects</Link>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;