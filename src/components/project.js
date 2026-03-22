import React from "react";
import "../styles/project.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {/* Portfolio Project */}
        <a
          href="https://github.com/METHUNSM001/my-portfolio"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Personal website built using React.js.</p>
          </div>
        </a>

        {/* Life Manager Project */}
        <a
          href="https://github.com/METHUNSM001/methun-life-manager"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Life Manager</h3>
            <p>A website using HTML, CSS, JS, Flask & Groq</p>
          </div>
        </a>

        {/* NEW: Crypto Data Project */}
        <a
          href="https://github.com/METHUNSM001/crypto-data-project"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="project-card">
            <h3>Crypto Data Pipeline</h3>
            <p>
              Built an ETL pipeline to collect real-time crypto data,
              store it in MySQL, and visualize using Streamlit dashboard.
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}

export default Projects;
