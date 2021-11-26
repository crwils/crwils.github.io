import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import { Header, NavBar, ProjectList, About } from "../components";

function Portfolio(props) {

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <Router>
      <main>
        <section className="header-index">
          <NavBar ref={myRef}  scroll={executeScroll} />
          <Header />
        </section>
        <section>
          <Switch>
            <Route exact path="/about">
              <About ref={myRef} />
            </Route>
            <Route exact path="/projectlist">
              <ProjectList />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default Portfolio;
