import React from 'react';
import myavatar from "../myavatar.png" 
import "../style.css"

function NavBar (props) {

    return (
        <nav>
            <div className="max-width">
                <span className="icon-me" title="link to homepage" href=".">
                    <a href='/'>
                        <img type="button" src={myavatar} alt="A photograph of me" />
                    </a>
                </span>
                <ul>
                    <a className="nav-link" href='#about'>About</a>
                    <a className="nav-link" href='#project-list'>Projects</a>
                    <a className="nav-link" href='/contact'>Contact</a>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;