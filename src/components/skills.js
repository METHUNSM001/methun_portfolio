import "../styles/skills.css";

function Skills() {
  return (<section id="skills" className="skills">
  <h2>Skills</h2>

  <div className="skill-group-container">
    <div className="skill-group">
      <h3>Web Development</h3>
      <p>HTML, CSS, JavaScript, React, Flask</p>
    </div>

    <div className="skill-group">
      <h3>Programming</h3>
      <p>Python(pandas,numpy,matplotlib,seaborn), C</p>
    </div>

    <div className="skill-group">
      <h3>Database</h3>
      <p>MySQL</p>
    </div>

    <div className="skill-group">
      <h3>Other Skills</h3>
      <p>UI/UX Design, Figma, Canva, Prompt Writing</p>
    </div>
  </div>
</section>

  );
}

export default Skills;
