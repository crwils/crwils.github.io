import React from 'react';
import myavatar from '../myavatar.png'

function Header(props) {
    return (
    <div className="App">
      <header className="App-header">
        <img src={myavatar} className="App-logo" alt="logo" />
        <p>
          Hi, I'm Craig... and welcome to my portfolio!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default Header;