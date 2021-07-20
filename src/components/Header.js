import React from 'react';
import myavatar from '../myavatar.png'

function Header(props) {
    return (
    <div className="App">
      <header className="App-header">
        <img src={myavatar} className="App-logo" alt="logo" />
        <p>
          Hi, I'm Craig! Welcome to my portfolio.
        </p>
        <a
          className="App-link"
          href="https://soundcloud.com/craigwilsonofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Music
        </a>
        <a
          className="App-link"
          href="https://twitter.com/cr_wils"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="App-link"
          href="https://instagram.com/_crwils"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="https://linkedin.com/in/crwils"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
    );
}

export default Header;