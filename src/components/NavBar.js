import React from 'react';
import myavatar from "../myavatar.png" 
import "../style.css"

function NavBar(props) {
    return (
        <nav>
            <div>
                <a class="icon-me" title="link to homepage" href=".">
                    <img src={myavatar} alt="A photograph of me" />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;