import React from "react";
import "./App.css";

/* Components */
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/project";
import Certificates from "./components/certificate";
import Contact from "./components/contact";

function App() {
  return (
    <>
      {/* Background Wave Effect */}
      <div className="wave-bg"></div>

      {/* Main App Content */}
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </>
  );
}

export default App;