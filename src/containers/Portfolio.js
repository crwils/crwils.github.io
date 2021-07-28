import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, NavBar, ProjectList, About } from "../components";

function Portfolio(props) {
  return (
    <Router>
      <main>
        <section className="header-index">
          <NavBar />
          <Header />
        </section>
        <section>
          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/projectlist'>
              <ProjectList />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default Portfolio;
