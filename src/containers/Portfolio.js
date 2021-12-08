import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import { Header, NavBar, ProjectList, About } from "../components";

function Portfolio(props) {

  const aboutRef = useRef();

  const executeScroll = () => {
    aboutRef.current.scrollIntoView();
  }

  return (
      <main>
        <section className="header-index">
          <NavBar scroll={executeScroll}/>
          <Header />
        </section>
        <section>
          <About ref={aboutRef}/>
          <ProjectList />
        </section>
      </main>
  );
}

export default Portfolio;
