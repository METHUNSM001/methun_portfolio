import "../styles/coding.css";

function Coding() {
  return (
    <section id="code" className="code">
      <h2>Coding Pratice</h2>

      <div className="coding-container">
        {/* Python Portfolio Project */}
        <a
          href="https://github.com/METHUNSM001/python.code"
          target="_blank"
          rel="noreferrer"
          className="pythoncoding-link"
        >
          <div className="coding-card">
            <h3>Python Coding</h3>
          </div>
        </a>

        {/* MySQL Portfolio Project */}
        <a
          href="https://github.com/METHUNSM001/my_sql"
          target="_blank"
          rel="noreferrer"
          className="mysql-link"
        >
          <div className="coding-card">
            <h3>MySQL Coding</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Coding;
