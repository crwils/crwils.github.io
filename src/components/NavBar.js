import React from 'react';
import { Link } from 'react-router-dom'
import myavatar from "../myavatar.png" 
import "../style.css"

function NavBar(props) {

    return (
        <nav>
            <div className="max-width">
                <a className="icon-me" title="link to homepage" href=".">
                    <Link to='/'>
                        <img type="button" src={myavatar} alt="A photograph of me" />
                    </Link>
                </a>
                <ul>
                    {/* <li>Home</li> */}
                    <Link className="nav-link" to='/about' onClick={props.scroll}>About</Link>
                    {/* <li>About</li> */}
                    <Link className="nav-link" to='/projectlist'>Projects</Link>
                    {/* <li>Projects</li> */}
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;