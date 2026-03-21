import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skill-group-container">

        <div className="skill-group">
          <h3>Languages</h3>
          <p>Python, SQL</p>
        </div>

        <div className="skill-group">
          <h3>Data Engineering</h3>
          <p>ETL Pipelines, Data Cleaning, Data Modeling</p>
        </div>

        <div className="skill-group">
          <h3>Tools & Frameworks</h3>
          <p>Pandas, NumPy, Apache Airflow (Learning), Flask</p>
        </div>

        <div className="skill-group">
          <h3>Databases</h3>
          <p>MySQL, PostgreSQL (Learning)</p>
        </div>

        <div className="skill-group">
          <h3>Others</h3>
          <p>Git, Docker (Learning)</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
