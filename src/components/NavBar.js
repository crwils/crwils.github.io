import React, {forwardRef, useRef} from 'react';
import { Link } from 'react-router-dom'
import myavatar from "../myavatar.png" 
import "../style.css"

const NavBar = forwardRef(({ref, scroll}) => {

    return (
        <nav>
            <div className="max-width">
                <a className="icon-me" title="link to homepage" href=".">
                    <a href='/'>
                        <img type="button" src={myavatar} alt="A photograph of me" />
                    </a>
                </a>
                <ul>
                    {/* <li>Home</li> */}
                    <a onClick={scroll} className="nav-link" href='/about'>About</a>
                    {/* <li>About</li> */}
                    <a className="nav-link" href='/projectlist'>Projects</a>
                    {/* <li>Projects</li> */}
                    <a className="nav-link" href='/contact'>Contact</a>
                </ul>
            </div>
        </nav>
    );
})

export default NavBar;