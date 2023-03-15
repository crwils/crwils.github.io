import React from "react";

import { Header, NavBar, ProjectList, About } from "../components";
import "../style.css";
import bgcrwils from "../assets/bgcrwils.png"

const Portfolio = () => {

  // window resize event
  // get window size
  // get new window size
  // check if new size is equal to old size, if not, do something e.g. change border to dashed instead of solid

  return (
    <main>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <p className="text-[#b29c9b] font-mona bg-clip-text bg-gradient-to-l from-[#b29c9b] to-white hover:text-white transition-all duration-500 ease-in-out cursor-pointer text-8xl">crwils.com</p>
        {/* <p className="font-mona bg-gradient-to-l from-blue-600 via-green-500 to-indigo-400 hover:text-green-500 transition-all ease-in-out duration-500 text-transparent bg-clip-text cursor-pointer text-8xl">crwils.com</p> */}
      </div>
      {/* <section className="header-index">
          <NavBar/>
          <Header />
        </section>
        <section>
          <About/>
          <ProjectList />
        </section> */}
    </main>
  );
}

export default Portfolio;
