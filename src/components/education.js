import "../styles/education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="edu-card-container">
        <div className="edu-card">
          <h3>B.E. Computer Science</h3>
          <p>2024 – Present</p>
          <span>Shree Venkateshwara Hi-Tech Engineering College</span>
        </div>

        <div className="edu-card">
          <h3>Higher Secondary (HSC)</h3>
          <p>2023 – 2024</p>
          <span>Montfort Senior Secondary School</span>
        </div>

        <div className="edu-card">
          <h3>Secondary (SSC)</h3>
          <p>2021 – 2022</p>
          <span>Montfort Senior Secondary School</span>
        </div>
      </div>
    </section>
  );
}

export default Education;