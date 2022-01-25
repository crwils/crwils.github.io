import React from "react";

import { Header, NavBar, ProjectList, About } from "../components";

function Portfolio(props) {

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
