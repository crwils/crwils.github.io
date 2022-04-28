import React from 'react';
import myAvatar from "../myavatar.png" 
import "../style.css"
import DarkMode from './DarkMode';

const NavBar = () => {

    return (
        <>
            <nav>
                <div className="max-width">
                    <span className="icon-me" title="link to homepage">
                        <a href='/'>
                            <input type="image" src={myAvatar} />
                        </a>
                    </span>
                    <DarkMode/>
                    <ul>
                        <a className="nav-link" href='#about'>About</a>
                        <a className="nav-link" href='#project-list'>Projects</a>
                        <a className="nav-link" href='/contact'>Contact</a>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;