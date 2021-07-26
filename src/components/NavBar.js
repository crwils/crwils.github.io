import React from 'react';
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;