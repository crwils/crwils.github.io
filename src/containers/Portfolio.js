import React from "react";

import { Header, NavBar, ProjectList, About } from "../components";
import "../style.css";

function Portfolio(props) {

  // window resize event
  // get window size
  // get new window size
  // check if new size is equal to old size, if not, do something e.g. change border to dashed instead of solid

  return (
      <main>
        <section className="header-index">
          <NavBar/>
          <Header />
        </section>
        <section>
          <About/>
          <ProjectList />
        </section>
      </main>
  );
}

export default Portfolio;
